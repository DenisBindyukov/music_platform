import {Controller, Get} from "@nestjs/common";


@Controller('/tracks')
export class TrackController {

    creat() {

    }

    @Get()
    getAll() {
     return'WORK'
    }

    getOne() {

    }

    delete() {

    }
}