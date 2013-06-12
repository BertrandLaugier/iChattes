

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>iChattes</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta property="og:type" content="website"/>
<meta property="og:url" content="http://lightim.blaugier.fr/chat.html"/>
<meta property="og:image" content="http://lightim.blaugier.fr/apple-touch-icon-114x114-precomposed.png"/>
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57-precomposed.png">
<link rel="icon" type="image/png" href="apple-touch-icon-57x57-precomposed.png" />
<link rel="icon" sizes="16x16" href="favicon.ico">
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="css/style1.css" />
<link rel="stylesheet" type="text/css" href="css/style3.css" />
<link href='http://fonts.googleapis.com/css?family=Fjalla+One' rel='stylesheet' type='text/css'>
<!--[if IE]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="chat.js"></script>

</head>
<body>



  <div class="page_message">
    <header class="message_individuel">
        <div class="titre" id="titre">
        </div>
        <div id="container_buttons">
                    <p>
                        <a href="#" class="a_demo_one" id="back_page_liste2">
                            Messages
                        </a>
                    </p> 
                   
        </div>
    </header>
  </div>


  <div class="page_add">
  <header class="new_contact">
        <div class="titre">
            Nouveau Contact
        </div>
        <div id="container_buttons">
                    <p>
                        <a href="#" class="a_demo_one" id="back_page_liste">
                            back
                        </a>
                    </p> 
                   
        </div>
    </header>
  </div>

  <div class="page_liste">
  <header class="list_contact">
    <div class="titre">
      Messages
    </div>
    <div id="container_buttons">
                    <p>
                        <a href="#" class="a_demo_one" id="deco">
                            Déconnexion
                        </a>
                    </p> 
                    <p>
                        <a id="add" class="a_demo_one" href="#">
                            Add Contact
                        </a>
                    </p>
                   
        
  </header>
</div>

<div id="content" >

    <div class="page_login">
    <div class="image"><img src="cat.png"><h1>iChattes</h1></div>
    <form>
      <div class="login">
        <input type="text" placeholder="Pseudo" id="log_l" class="log"/>
        <input type="password" placeholder="Mot de passe" id="pass_l" class="pass"/>
        <input type="button" class="connect"value="Connexion" id="g_page_liste"/> 
      </div>
    </form>
    <a href="#" class="creat" id="g_page_inscription">s'inscrire</a>
  </div>

  <div class="page_inscription">
    <div class="image"><img src="cat.png"><h1>iChattes</h1></div>
    <form>
      <div class="create">
        <input type="text" id="log_c" class="log" placeholder="Pseudo"/>
        <input type="password" id="pass_c" class="pass" placeholder="Mot de passe"/>
        <input type="submit" class="connect" value="Inscription" id="g_page_login">
      </div>
    </form>
    <a href="#" class="creat" id="g_page_login">se connecter</a>
  </div>

<div class="page_add">
<form >
  <div class="s_message">
    <input type="text" placeholder="dest" id="dest_s"class="log">
    <textarea row="3" placeholder="message" id="msg_s" class="pass"></textarea>
    <input type="button" class="connect" value="Envoyer" id="g_page_liste2"/> 
  </div>
</form>
</div>



<div class="page_liste">
   <div class="contacts">
        <div id="contact" class="contact"></div>
    </div>
</div>    
<div class="page_messages">
  <div id="messages">

    <div id="date">
    </div>


  </div>
</div>

<div class="reponse">
  <div class="page_send">
    <form >
      <div class="send_message">
        <textarea row="3" placeholder="message" id="msg_send" class="pass"></textarea>
        <input type="button" class="connect" value="Envoyer" id="g_page_liste3"/> 
      </div>
    </form>
  </div>
</div>

</body>
</html>