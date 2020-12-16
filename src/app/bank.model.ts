
     interface Statement {
        Amount: number;
        Wdate: string;
        Category: string;
    }

     interface StandingInstr {
        Type: string;
        Amount: number;
        Wdate: string;
        Wtype: string;
        Frequency: string;
    }

     interface Biller {
        Name: string;
        Amount: number;
        Wdate: string;
        Wtype: string;
        Frequency: string;
    }

     interface Bank {
        Name: string;
        AccountNumber: number;
        RoutingNumber: number;
        Balance: number;
        PendingPayment: number;
        Statement: Statement[];
        StandingInstr: StandingInstr[];
        Biller: Biller[];
    }

    export interface Banks {
        Bank: Bank[];
    }



