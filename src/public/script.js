
function updateMail(mailId){
    //contact server
    return $.ajax({
        method:'put',
        url:`/mails/${mailId}`,
        contentType:'application/json',
        cache:false,
        error: error => {
            console.error(error);
        }
    });
};

function deleteMail(mailId) {
    //contact server
    return $.ajax({
        method:'delete',
        url:`/mails/${mailId}`,
        contentType:'application/json',
        cache:false,
        success: () => {
            location.reload()
        },
        error: error => {
            console.error(error);
        }
    });
}
