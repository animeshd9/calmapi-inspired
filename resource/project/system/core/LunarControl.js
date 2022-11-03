'use strict'
const autoBind = require( 'auto-bind' );
const defaultDTO = require( './LunarDTO' );

class LunarController {
    /**
     * Lunar Controller
     * @author Animesh Das
     * @params { any } service
     */

    constructor( service ) {
        this.service = service;
        this.dto = defaultDTO;
        autoBind( this );
    }

    // async getAll
}
