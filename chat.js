var server = 'http://lightim.aws.af.cm/';

$(document).ready(function(){

    // on affiche les éléments de bases
    afficher();

    $("#g_page_login").bind("click",function(e){
            tw.create();
    });

    $("#g_page_liste").bind("click",function(e){
            tw.log();
    });

    $("#g_page_liste2").bind("click",function(e){
            tw.send();
    });

    $("#g_page_liste3").bind("click",function(e){
            tw.send_message();

    });


    // si on click sur un contact, on affiche la conversation
    $('.lien').live("click",function(e){
        if(friend_before != friend){
            friend_before = friend;
        }
        
        e.preventDefault();
        friend = this.getAttribute('href');

        $("#titre").empty();
        newFriend = document.createElement("div");
        newFriend.innerHTML = friend;
        div = document.getElementById("titre");
        div.appendChild(newFriend);

        var triggers = document.getElementsByClassName(friend);
        //console.log(triggers);

        for (var i=0; i < triggers.length;i++){
                var target = triggers[i].className;
                //console.log(target);
                $("."+target).show();
                if(friend_before != friend && friend_before !== null){
                    $("."+friend_before).hide();
                }
                for (var k=0;k<cpt;k++) {
                    if(contact[k][0]==friend){
                        contact[k][1]=0;
                    }
                }

                   
         };

        
});


// si on fait un retour aux menu de contact, on hide les message et show les contacts
    $('#message a').bind("click",function(e){
        $("#messages").hide();
        $("#contact").show();
    });
});

//////////////////////////////////
/*Liens entre les pages*/

var afficher = function(){
    $(".page_liste").hide();
    $(".page_add").hide();
    $(".page_inscription").hide();
    $(".page_message").hide();
    $(".reponse").hide();

    $('#g_page_inscription').live('click',function(e){
        $(".page_inscription").show();
        $(".page_login").hide();
        e.preventDefault();
    });

    $('#g_page_login').live('click',function(e){
        $(".page_inscription").hide();
        $(".page_login").show();
        e.preventDefault();
    });

    $('#g_page_liste').live('click',function(e){
        e.preventDefault();
    });
    $('#g_page_liste2').live('click',function(e){
        e.preventDefault();
    });


    $('#deco').live('click',function(e){
        $(".page_message").hide();
        location.reload();
        e.preventDefault();
    });

    $('#add').live('click',function(e){
        $(".page_liste").hide();
        $(".page_add").show();
        e.preventDefault();
    });

    $('#back_page_liste').live('click',function(e){
        $(".page_add").hide();
        $(".page_liste").show();
        e.preventDefault();
    });

    $('#g_page_message').live('click',function(e){
        $(".page_liste").hide();
        $(".page_message").show();
        $(".page_messages").show();
        $(".reponse").show();
        e.preventDefault();
    });

    $('#back_page_liste2').live('click',function(e){
        $(".page_message").hide();
        $(".page_messages").hide();
        $(".reponse").hide();
        $(".page_liste").show();
        e.preventDefault();
    });



}     







////////////////////////////////   


// tableau qui stocke toutes les données du user
var me={};

// tableau qui stocke toutes les convers
var dial={};

var classe={};

// tableau qui stocke les contacts 
var contact={};
// var qui contient le contact actuel de la conversation

var friend ="";

// var qui contient le message envoyé
var send="";
// var qui contient le contact précédent actuel de la conversation
var friend_before ="";

// var qui contient la case actuel du tableau de contact
var cpt=0;


var tw = {

        // creation d'un user
        load_create : function(lien){
                $.ajax({
                        url: lien,
                        dataType: "jsonp",
                        success: function(d){
                                console.log("ca marche",d);                          

                        },
                        error: function(err){
                                console.log("ca plante",err);
                        }

                });

        },

        // log d'un user
        load_log : function(log,pass){
                $.ajax({
                        url: server+"login/"+log+"/"+pass,
                        dataType: "jsonp",
                        success: function(d){
                                console.log("ca marche",d);
                                $(".page_login").hide();
                                $(".page_liste").show();
                                    me.token=d.token;
                                    $("#loading").hide();
                                    tw.receive();


                                

                        },
                        error: function(err){
                                console.log("ca plante",err);
                        }

                });

        },


        // chargement des messages reçus
        load_receive : function(log,token){
                $.ajax({
                        url: server+"inbox/"+log+"/"+token,
                        dataType: "jsonp",
                        success: function(d){
                                console.log("ca marche",d);
                                   $(d.inbox).each(function(i){
                                        //console.log(this.from);


                                        if(typeof dial[this.from]=='undefined'){
                                            dial[this.from]=[this];
                                            contact[cpt]=[this.from,1];                                      
                                            cpt++;
                                        }
                                        else{
                                            dial[this.from].push(this);
                                            //contact[cpt][1]=contact[cpt][1]+1; 
                                            for (var k=0;k<cpt;k++) {
                                                if(contact[k][0]==this.from){
                                                    contact[k][1]++;
                                                }

                                            }
                                        }
                                        // creation du message en html

                                         

                                        newMes = document.createElement("div");
                                        newMes.className = this.from;
                                        newMes.id = "bulle_receive";
                                        newMes.innerHTML = this.from+" : "+decodeURIComponent(this.message.toString())+"<br />"+ this.dt;
                                        div = document.getElementById("messages");
                                        div.appendChild(newMes);
                                       // console.log(newMes.className);
                                        if(friend!=newMes.className){
                                            $("."+newMes.className).hide();
                                        }
                                             
                                        //console.log(this.message); 
                                       
                                        
                                    });
                                if(!($(".page_message").css('display') == 'none'))
                                        {
                                            for (var k=0;k<cpt;k++) {
                                                if(contact[k][0]==friend){
                                                    contact[k][1]=0;
                                                }
                                            }
                                        }

                                    // ajout d'un contact
                                   $("#contact").empty();

                                   for (var k=0;k<cpt;k++) {
                                        newDiv = document.createElement("a");
                                        newDiv.href = contact[k][0];
                                        newDiv.className = "lien";
                                        newDiv.id = "g_page_message";

                                        newDiv3 = document.createElement("a");
                                        newDiv3.href = contact[k][0];
                                        newDiv3.className = "lien lien2";
                                        newDiv3.id = "g_page_message";


                                        newDiv2 = document.createElement("li");
                                        newDiv2.className = "contact_unique";



                                        newDiv.innerHTML = contact[k][0].toString();
                                        if(contact[k][1]>0)
                                            newDiv3.innerHTML = contact[k][1]+" >";
                                        else
                                            newDiv3.innerHTML = " >";
                                        div = document.getElementById("contact");
                                        div.appendChild(newDiv2).appendChild(newDiv);
                                        div.appendChild(newDiv2).appendChild(newDiv3)

                                            }
/*
                                                cont = document.getElementsByTagName("a");

                                                    for (var i=0; i < cont.length;i++){
                                                        classe[i]= document.getElementsByTagName('a')[i].className;
                                                        console.log(classe[i]);
                                                    }
*/
                                },
                        error: function(err){
                                console.log("ca plante",err);
                        }

                });

        },

        // chargement des messages envoyés
        load_send : function(log,token,destinataire,msg){
                $.ajax({
                        destinataire : encodeURIComponent(destinataire),
                        url: server+"tell/"+log+"/"+token+"/"+destinataire+"/"+msg,
                        dataType: "jsonp",
                        success: function(d){
                                console.log("ca marche",d);
                                    /*
                                    newDiv = document.createElement("div");
                                    newDiv.innerHTML = d.dt;
                                    div = document.getElementById("messages");
                                    div.appendChild(newDiv);
                                    */

                                        if(typeof dial[destinataire]=='undefined'){
                                           dial[destinataire]=(log +"///"+ destinataire +"///"+ decodeURIComponent(msg)+"///"+d.dt).split('///');
                                           //console.log(dial[destinataire]);
                                           contact[cpt]=[destinataire,0];
                                            cpt++;
                                            $(".page_add").hide();
                                            $(".page_liste").show();
                                            $(".page_message").hide();
                                            $(".page_messages").hide();
                                            $(".reponse").hide();
                                        }
                                        else{
                                            dial[destinataire]=(log +"///"+ destinataire +"///"+ decodeURIComponent(msg)+"///"+d.dt).split('///');
                                        }
                                   $(dial).each(function(j){
                                        send="";
                                        send = this[destinataire];
                                        newMes = document.createElement("div");
                                        newMes.className = send[1];
                                        newMes.id        = "bulle_send";
                                        newMes.innerHTML = send[0]+" : "+decodeURIComponent(send[2].toString())+"<br />"+send[3];
                                        div = document.getElementById("messages");
                                        div.appendChild(newMes);
                                        //console.log(newMes.className);
                                        if(friend!=newMes.className){
                                            $("."+newMes.className).hide();
                                        }
                                        
                                        
                                    });




                        },
                        error: function(err){
                                console.log("ca plante",err);
                        }

                });

        },

        create: function(){ 
                var log = (document.getElementById('log_c').value);
                document.getElementById('log_c').value = '';
                var pass = (document.getElementById('pass_c').value);
                document.getElementById('pass_c').value = '';
                 var url = server+"create/"+log+"/"+pass;
                tw.load_create(url);

            },
        log: function(){ 
                var log = (document.getElementById('log_l').value);
                document.getElementById('log_l').value = '';
                me.login = log;
                var pass = (document.getElementById('pass_l').value);
                document.getElementById('pass_l').value = '';
                me.pass = pass;
                tw.load_log(log,pass);

            },

        receive: function(){ 
                var log = me.login;
                var token = me.token;
                //console.log(log);
                //console.log(token);
                tw.load_receive(log,token);
                 window.setInterval(function(){
                                tw.load_receive(log,token);
                },1000);

            },

        send: function(){ 
                var log = me.login;
                var token = me.token;
                var dest = (document.getElementById('dest_s').value);
                var msg = (document.getElementById('msg_s').value);
                tw.load_send(log,token,dest,msg);
                document.getElementById('dest_s').value = '';
                document.getElementById('msg_s').value = '';
                return(dest);


            },
            send_message: function(){ 
                var log = me.login;
                var token = me.token;
                var dest = friend;
                var msg = (document.getElementById('msg_send').value);
                tw.load_send(log,token,dest,msg);
                document.getElementById('msg_send').value = '';
            },
}
