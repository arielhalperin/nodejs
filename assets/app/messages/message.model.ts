/**
 * Created by halpe_000 on 31-Dec-16.
 */
export class Message{

    constructor(public content: string,
                public username: string,
                public messageId?: string,
                public userId?: string) {

    }
}