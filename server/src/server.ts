import express, { response } from 'express';
import {PrismaClient} from '@prisma/client'
import cors from 'cors';
import { convertHoursStringstoMinutes } from './utils/convert-hour-strings-to-minutes'
import { convertMinutesToHourStrings } from './utils/convertMinutesToHourStrings';




const app = express()
app.use(cors())
app.use(express.json())
const prisma = new PrismaClient({
    log:['query']
})



app.get('/games', async (request, response) =>{
    const games = await prisma.game.findMany({
        include:{
            _count:{
                select :{
                    Ads: true,
                }
            }
        }
    })
    return response.json(games)
})



app.post('games/:id/ads', async (request, response) =>{
    const gameId = request.params.id;
    const body = request.body;

    const ad = await prisma.ad.create({
        data:{
            gameId,
            name : body.name,
            yearsPlaying: body.yearsPlaying,
            discord : body.discord,
            weekDays : body.weekDays.join(','),
            hourStart : convertHoursStringstoMinutes(body.hourStart),
            hourEnd : convertHoursStringstoMinutes(body.hourEnd),
            useVoiceChannel : body.useVoiceChannel,
        }
    })

    return response.status(200).json(ad)
})



app.get('/games/:id/ads', async (request, response) => {
    const gameId : any = request.params.id;

    const ads = await prisma.ad.findMany({
        select :{
            id:true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourEnd:true,
            hourStart: true,
        },
        where :{
            gameId,
        },
        orderBy:{
            createAt: 'desc'
        }
    })

    return response.json(ads.map((ad: any) => {
        return {
            ...ad,
            weekDays:ad.weekDays.split(','),
            hourStart: convertMinutesToHourStrings(ad.hourStart),
            hourEnd: convertMinutesToHourStrings(ad.hourEnd),
        }
    }))
})

app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
            select :{
                discord: true,
            },
            where:{
                id:adId,
            }
        })

    return response.json({
        discord: ad.discord,
    })
})


app.listen(3333)