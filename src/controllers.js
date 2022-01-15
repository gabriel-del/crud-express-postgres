const db = require('./db');
class Mail {
    async getMails(){
        let results = await db.query(
            `SELECT * FROM mails`
        ).catch(console.log);
        return results.rows;
    };
    
    async createMail(mail){
        await db.query('INSERT INTO mails (title, checked) VALUES ($1, $2)',[mail.title,false])
        .catch(console.log);
        return;        
    };

    async updateMail(mailId){
        //get the previous mail.
        let original_mail = await db.query(
            `SELECT * FROM mails WHERE id=$1`,[parseInt(mailId)]
        ).catch(console.log);
        //update
        await db.query(`UPDATE mails SET checked=$1 WHERE id=$2`,[!original_mail.rows[0].checked,parseInt(mailId)])
        .catch(console.log);
        return;
    };

    async deleteMail(mailId){
        await db.query(`DELETE FROM mails WHERE id=$1`,[parseInt(mailId)])
        .catch(console.log);
        return;        
    };
};

module.exports = Mail;
