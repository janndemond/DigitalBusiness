var APP_DATA = {
  "scenes": [
    {
      "id": "0-0_welcome",
      "name": "0-Welcome",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.39789043630882226,
        "pitch": 0.013891795673314888,
        "fov": 1.4041062726189781
      },
      "linkHotspots": [
        {
          "yaw": 0.663738525401449,
          "pitch": -0.06340843067462032,
          "rotation": 0,
          "target": "1-1_technopark",
          "Question": "Wollt Ihr 32Peaks helfen, den verschollenen Trainee zu finden? ",
          "PosibleAnswares" : "<form>\n" +
              "\t\t<div class=\"form-check\">\n" +
              "\t\t\t<input class=\"form-check-input\" type=\"radio\"  name=\"Option-1-1_technopark\" value=\"A\" id=\"flexRadioDefault1\">\n" +
              "\t\t\t<label class=\"form-check-label\" for=\"flexRadioDefault1\">\n" +
              "\t\t\t\tJa!\n" +
              "\t\t\t</label>\n" +
              "\t\t</div>\n" +
              "\t\t<div class=\"form-check\">\n" +
              "\t\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-1-1_technopark\" value=\"B\" id=\"flexRadioDefault2\" checked>\n" +
              "\t\t\t<label class=\"form-check-label\" for=\"flexRadioDefault2\">\n" +
              "\t\t\t\tNe, sorry kein Bock.\n" +
              "\t\t\t</label>\n" +
              "\t\t</div>\n" +
              "\t\t<input type=\"button\" id=\"btn-1-1_technopark\" class=\"btn btn-light\" value=\"Ab zum nächsten Raum\"/>\n" +
              "\t</form>"

        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2590035583247463,
          "pitch": 0.13462481453125008,
          "title": "Hoi Freunde!",
          "text": "<figure>\n" +
              "    <audio\n" +
              "        controls\n" +
              "        src=\"/media/franco.ogg\">\n" +
              "            Your browser does not support the\n" +
              "            <code>audio</code> element.\n" +
              "    </audio>\n" +
              "</figure>"+"<div>Vielen Dank, dass Ihr gekommen seid, um uns zu helfen. Wir haben ein riesen Problem! In wenigen Tagen findet das Fürstenfest statt, eines der größten Feste in Liechtenstein. Und dieses Jahr haben wir sogar die großartige Möglichkeit bekommen, unseren Gin dort exklusiv anzubieten. Die Vorbereitungen laufen schon seit Wochen auf Hochtouren. Und jetzt das! Unser neuer Trainee, der sich hauptsächlich um die Organisation für das Fest gekümmert hat, ist verschwunden. Wie vom Erdboden verschluckt! Er reagiert nicht auf Anrufe, und wir machen uns langsam große Sorgen. Das letzte mal haben wir ihn gestern gesehen, als wir noch in unserer Lieblingsbar auf das kommende Fest angestoßen haben. Aber jetzt ist alles in Gefahr. Wir müssen sie unbedingt finden, hoffentlich ist ihr nichts zugestoßen. Könnt ihr uns helfen?" +
              "</div>"
        }
      ]
    },
    {
      "id": "1-1_technopark",
      "name": "1-TechnoPark",
      "CorrectAnswer": "A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3607972399495516,
        "pitch": 0.04050045858059015,
        "fov": 1.4041062726189781
      },
      "linkHotspots": [
        {
          "yaw": 1.2869804435436496,
          "pitch": 0.08423357660425523,
          "rotation": 0,
          "target": "2-2_bar",
          "Question": "Wann findet das Fürstenfest statt? ",
          "PosibleAnswares" :"<form>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\"  name=\"Option-2-2_bar\" value=\"A\" id=\"flexRadioDefault3\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault3\">\n" +
              "\t\t\tAm 30. September\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-2-2_bar\" value=\"B\" id=\"flexRadioDefault4\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault4\">\n" +
              "\t\t\tAm 1. August\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-2-2_bar\" value=\"C\" id=\"flexRadioDefault5\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault5\">\n" +
              "\t\t\tAm zweiten Sonntag des dritten Neumond im Jahr\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-2-2_bar\" value=\"D\" id=\"flexRadioDefault6\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault6\">\n" +
              "\t\t\tZwei Wochen vor Ostern\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-2-2_bar\" value=\"E\" id=\"flexRadioDefault7\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault7\">\n" +
              "\t\t\tAm 15. August\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-2-2_bar\" value=\"F\" id=\"flexRadioDefault8\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault8\">\n" +
              "\t\t\tImmer wenn der Mond über den Drei Schwestern steht\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t\n" +
              "\t<input type=\"button\" id=\"btn-2-2_bar\" class=\"btn btn-light\" value=\"Next!\"/>\n" +
              "</form>"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.01889285633430937,
          "pitch": -0.0031486119751988895,
          "title": "To-Do List",
          "text": "<img src=\"/media/todo.jpeg\" class=\"img-fluid\" alt=\"Responsive image\">"
        },
        {
          "yaw": 0.18978832867153983,
          "pitch": 0.2985218736834092,
          "title": "Start",
          "text": "<a href=\"https://www.startvaduz.li/\" target=\"_blank\"> Zusätzliche Informationen</a>"
        },
        {
          "yaw": -0.2644852542788687,
          "pitch": 0.3267736355491131,
          "title": "Kalender",
          "text": "<img src=\"/media/calender.jpeg\" class=\"img-fluid\" alt=\"Responsive image\">"
        },
        {
          "yaw": 1.2356663112103057,
          "pitch": -0.16037961303617898,
          "title": "Technopark",
          "text": "<a href=\"https://www.technopark-liechtenstein.li/\" target=\"_blank\"> Zusätzliche Informationen</a>"
        },
        {
          "yaw": 2.580603638276358,
          "pitch": 0.3154586124823098,
          "title": "Staatsfeiertag&nbsp;",
          "text": "<a href=\"https://staatsfeiertag.li/\" target=\"_blank\"> Zusätzliche Informationen</a>"
        }
      ]
    },
    {
      "id": "2-2_bar",
      "name": "2-Bar",
      "CorrectAnswer": "E",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.686833842570014,
        "pitch": 0.13664173890441234,
        "fov": 1.4041062726189781
      },
      "linkHotspots": [
        {
          "yaw": 1.8582616467756843,
          "pitch": 0.38569157928499465,
          "rotation": 0,
          "target": "3-3_empfang",
          "Question": "Wie heißt die Bar, in der wir uns befinden?",
          "PosibleAnswares" :"\n" +
              "<form>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\"  name=\"Option-3-3_empfang\" value=\"A\" id=\"flexRadioDefault13\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault13\">\n" +
              "\t\t\tKantine\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-3-3_empfang\" value=\"B\" id=\"flexRadioDefault14\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault14\">\n" +
              "\t\t\t32Peaks Bar\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-3-3_empfang\" value=\"C\" id=\"flexRadioDefault15\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault15\">\n" +
              "\t\t\tCaipi\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-3-3_empfang\" value=\"D\" id=\"flexRadioDefault16\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault16\">\n" +
              "\t\t\tHaifischbar\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-3-3_empfang\" value=\"E\" id=\"flexRadioDefault17\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault17\">\n" +
              "\t\t\tSchlössle Bar\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-3-3_empfang\" value=\"F\" id=\"flexRadioDefault18\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault18\">\n" +
              "\t\t\tThe NoMad\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-3-3_empfang\" value=\"G\" id=\"flexRadioDefault19\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault19\">\n" +
              "\t\t\tScanaua\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-3-3_empfang\" value=\"H\" id=\"flexRadioDefault110\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault110\">\n" +
              "\t\t\tFürstenkneipe\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t\n" +
              "\t<input type=\"button\" id=\"btn-3-3_empfang\" class=\"btn btn-light\" value=\"Next!\"/>\n" +
              "</form>"

        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1039706669128222,
          "pitch": 0.08511261683053384,
          "title": "Franco",
          "text": "Text",
          "link" : "https://www.instagram.com/p/CQL-zFKsQ5Y/?utm_source=ig_web_copy_link"
        },
        {
          "yaw": -0.18415190458643949,
          "pitch": 0.15136275006445743,
          "title": "Bredi",
          "text": "Text",
          "link": "https://www.instagram.com/p/CP59ApsMvue/?utm_source=ig_web_copy_link"

        },
        {
          "yaw": 0.18256522452617396,
          "pitch": 0.0896249543679204,
          "title": "Daniel",
          "text": "Text",
          "link":"https://www.instagram.com/p/CPa8l_0ssPM/?utm_source=ig_web_copy_link"
        },
        {
          "yaw": 0.28371297827221476,
          "pitch": 0.1577632480028086,
          "title": "Trainee",
          "text": "Text",
          "link":"https://www.tiktok.com/@ginfluencerli?lang=de-DE&is_copy_url=1&is_from_webapp=v1"
        },
        {
          "yaw": 0.655919939364308,
          "pitch": 0.1684465529114636,
          "title": "Alwalser",
          "text": "<iframe width=\"370\" height=\"210\" src=\"https://www.youtube.com/embed/KENj2UDR-So\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "yaw": -2.6798710941977575,
          "pitch": 0.4244032358950349,
          "title": "Gin Preparation",
          "text": "<iframe width=\"370\" height=\"210\" src=\"https://www.youtube.com/embed/MBXB55SdQPc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe"
        },
        {
          "yaw": 2.7777952912129127,
          "pitch": -0.022748173125471283,
          "title": "Leider",
          "text": "Das ist leider nicht der richtige Gin. Finde die&nbsp; 32Peaks Flasche, um einen Hinweis zu erhalten."
        },
        {
          "yaw": 2.9952626078212594,
          "pitch": 0.29654201279860004,
          "title": "Barkeeper Audio&nbsp;",
          "text": "<figure>\n" +
              "\t<audio\n" +
              "\t\tcontrols\n" +
              "\t\tsrc = \"/media/barkeeper.ogg\">\n" +
              "\t\tYour browser does not support the\n" +
              "<code>audio</code> element.\n" +
              "\t</audio>\n" +
              "</figure>"
        },
        {
          "yaw": -2.8466466396787524,
          "pitch": -0.024763954489261053,
          "title": "Super",
          "text": "Sehr gut, du hast den 32Peaks Gin gefunden. Hinweis: wir befinden uns in hier: <a href=\"https://scanaua.li/\" target=\"_blank\"> Link zur Bar</a>"
        },
        {
          "yaw": -2.5771915614857797,
          "pitch": -0.03083415930365163,
          "title": "<span style=\"font-family: Calibri, sans-serif; font-size: 14.6667px; background-color: rgba(58, 68, 84, 0.8);\">Leider&nbsp;</span>",
          "text": "<span style=\"font-size:11.0pt;line-height:107%;\nfont-family:&quot;Calibri&quot;,sans-serif;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:\nCalibri;mso-fareast-theme-font:minor-latin;mso-hansi-theme-font:minor-latin;\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\nmso-ansi-language:DE;mso-fareast-language:EN-US;mso-bidi-language:AR-SA\">Das\nist leider nicht der richtige Gin. Finde die&nbsp;\n32Peaks Flasche, um einen Hinweis zu erhalten.</span>"
        }
      ]
    },
    {
      "id": "3-3_empfang",
      "name": "3-Empfang",
      "CorrectAnswer": "G",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.4577390940087067,
        "pitch": 0.0023143283261752856,
        "fov": 1.4041062726189781
      },
      "linkHotspots": [
        {
          "yaw": -0.46399332284544137,
          "pitch": 0.10428788172190195,
          "rotation": 0,
          "target": "4-4_destillerie",
          "Question": "Wohin ist der Trainee nach der Bar gegangen?",
          "PosibleAnswares" :"\n" +
              "<form>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\"  name=\"Option-4-4_destillerie\" value=\"A\" id=\"flexRadioDefault23\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault23\">\n" +
              "\t\t\tNach Hause\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-4-4_destillerie\" value=\"B\" id=\"flexRadioDefault24\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault24\">\n" +
              "\t\t\tIn die Uni\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-4-4_destillerie\" value=\"C\" id=\"flexRadioDefault25\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault25\">\n" +
              "\t\t\tZurück ins Büro\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-4-4_destillerie\" value=\"D\" id=\"flexRadioDefault26\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault26\">\n" +
              "\t\t\tZu ihrem Tinder Date\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-4-4_destillerie\" value=\"E\" id=\"flexRadioDefault27\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault27\">\n" +
              "\t\t\tIn die Destillerie\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t\n" +
              "\t\n" +
              "\t<input type=\"button\" id=\"btn-4-4_destillerie\" class=\"btn btn-light\" value=\"Next!\"/>\n" +
              "</form>"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.11248885890118743,
          "pitch": -0.018041266782374166,
          "title": "Corona Zahlen",
          "text": "<a href=\"https://www.google.com/search?q=corona+zahlen+liechtenstein\" target=\"_blank\"> Zusätzliche Informationen</a>"
        },
        {
          "yaw": 0.15970471709390743,
          "pitch": 0.26294752202400673,
          "title": "Tonic",
          "text": "<a href=\"https://www.miomente.de/entdeckermagazin/welches-tonic-water-passt-zu-welchem-gin/\" target=\"_blank\"> Zusätzliche Informationen</a>"

        },
        {
          "yaw": 1.0309298301490735,
          "pitch": -0.20675490088442317,
          "title": "32Peaks",
          "text": "TikTok",
          "link": "https://www.tiktok.com/@ginfluencerli/video/6975219744383274245"
        }
      ]
    },
    {
      "id": "4-4_destillerie",
      "name": "4-Destillerie",
      "CorrectAnswer": "E",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5471268927543953,
        "pitch": 0.4625290735844363,
        "fov": 1.4041062726189781
      },
      "linkHotspots": [
        {
          "yaw": -2.6572057505611006,
          "pitch": 0.03203315956985975,
          "rotation": 0,
          "target": "5-5_steinraum",
          "Question": "Welches Botanical wollte der Trainee sammeln gehen?",
          "PosibleAnswares" :"<form>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\"  name=\"Option-5-5_steinraum\" value=\"A\" id=\"flexRadioDefault33\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault33\">\n" +
              "\t\t\tBrennnessel\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-5-5_steinraum\" value=\"B\" id=\"flexRadioDefault34\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault34\">\n" +
              "\t\t\tZitronenmelisse\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-5-5_steinraum\" value=\"C\" id=\"flexRadioDefault35\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault35\">\n" +
              "\t\t\tLavendel\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-5-5_steinraum\" value=\"D\" id=\"flexRadioDefault36\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault36\">\n" +
              "\t\t\tWachholder\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-5-5_steinraum\" value=\"E\" id=\"flexRadioDefault37\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault37\">\n" +
              "\t\t\tZitronenthymian\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-5-5_steinraum\" value=\"F\" id=\"flexRadioDefault38\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault38\">\n" +
              "\t\t\tOrangenminze\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-5-5_steinraum\" value=\"G\" id=\"flexRadioDefault39\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault39\">\n" +
              "\t\t\tRosmarin\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-5-5_steinraum\" value=\"H\" id=\"flexRadioDefault310\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault310\">\n" +
              "\t\t\tEnzian\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-5-5_steinraum\" value=\"I\" id=\"flexRadioDefault313\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault313\">\n" +
              "\t\t\tZitronenstrauch\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-5-5_steinraum\" value=\"J\" id=\"flexRadioDefault311\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault311\">\n" +
              "\t\t\tLorbeere\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-5-5_steinraum\" value=\"K\" id=\"flexRadioDefault312\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault312\">\n" +
              "\t\t\tEchte Engelwurz\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t\n" +
              "\t<input type=\"button\" id=\"btn-5-5_steinraum\" class=\"btn btn-light\" value=\"Next!\"/>\n" +
              "</form>"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2624008759186651,
          "pitch": -0.15474014096907673,
          "title": "Gin",
          "text": "<iframe width=\"370\" height=\"210\" src=\"https://www.youtube.com/embed/vlAGM0jJZSM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
        {
          "yaw": -2.156249840863614,
          "pitch": 0.3686509475444204,
          "title": "Liechtenstein",
          "text": "<figure>\n" +
              "\t<audio\n" +
              "\t\tcontrols\n" +
              "\t\tsrc = \"/media/Liechtenstein_Hymne.mp3\">\n" +
              "\t\tYour browser does not support the\n" +
              "<code>audio</code> element.\n" +
              "\t</audio>\n" +
              "</figure>"
        },
        {
          "yaw": -2.4155677168752803,
          "pitch": 0.3126013877889413,
          "title": "Mate",
          "text": "<a href=\"https://www.mate-tee.de/Zubereitung-von-Mate-Tee:_:1000.html\" target=\"_blank\"> Zusätzliche Informationen</a>"
        }
      ]
    },
    {
      "id": "5-5_steinraum",
      "name": "5-Steinraum",
      "CorrectAnswer": "J",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.03540531610454423,
        "pitch": 0.32863462231768636,
        "fov": 1.4041062726189781
      },
      "linkHotspots": [
        {
          "yaw": 1.757164369142603,
          "pitch": 0.049097057935203026,
          "rotation": 0,
          "target": "6-6_panorama",
          "Question": "Um wie viel Uhr ist der Trainee in Gaflei angekommen?",
          "PosibleAnswares" :"<form>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\"  name=\"Option-6-6_panorama\" value=\"A\" id=\"flexRadioDefault53\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault53\">\n" +
              "\t\t\t6:47 Uhr\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-6-6_panorama\" value=\"B\" id=\"flexRadioDefault54\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault54\">\n" +
              "\t\t\t6:30 Uhr\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-6-6_panorama\" value=\"C\" id=\"flexRadioDefault55\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault55\">\n" +
              "\t\t\t7:47 Uhr\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<input type=\"button\" id=\"btn-6-6_panorama\" class=\"btn btn-light\" value=\"Next!\"/>\n" +
              "</form>"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.11027622002190718,
          "pitch": 0.7742016550309572,
          "title": "LieMobiel",
          "text": "<img src=\"/media/liemobile.jpeg\" class=\"img-fluid\" alt=\"Responsive image\">"
        }
      ]
    },
    {
      "id": "6-6_panorama",
      "name": "6-Panorama",
      "CorrectAnswer": "A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2638539033505527,
        "pitch": 0.10993026984077936,
        "fov": 1.4041062726189781
      },
      "linkHotspots": [
        {
          "yaw": -0.43996007274554927,
          "pitch": 1.3722135929806054,
          "rotation": 0,
          "target": "2-2_bar"
        },
        {
          "yaw": 0.8997122222876524,
          "pitch": -0.1989241659073251,
          "rotation": 0,
          "target": "7-7_fuerstensteig",
          "Question": "Was ist das Wanderziel des Trainees?",
          "PosibleAnswares" :"<form>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\"  name=\"Option-7-7_fuerstensteig\" value=\"A\" id=\"flexRadioDefault63\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault63\">\n" +
              "\t\t\tFürstensteig\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-7-7_fuerstensteig\" value=\"B\" id=\"flexRadioDefault64\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault64\">\n" +
              "\t\t\tKirche\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-7-7_fuerstensteig\" value=\"C\" id=\"flexRadioDefault65\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault65\">\n" +
              "\t\t\tUniversität\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<input type=\"button\" id=\"btn-7-7_fuerstensteig\" class=\"btn btn-light\" value=\"Next!\"/>\n" +
              "</form>"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6625805215547764,
          "pitch": -0.06499558151755025,
          "title": "Gamprin",
          "text": "Link"
        },
        {
          "yaw": -0.34751600814345096,
          "pitch": 0.08545254546010739,
          "title": "Schaan",
          "text": "<a href=\"https://de.wikipedia.org/wiki/Pfarrkirche_St._Laurentius_(Schaan)\" target=\"_blank\"> Zusätzliche Informationen</a>"
        },
        {
          "yaw": -0.00918477098680981,
          "pitch": -0.36321445396964336,
          "title": "3 Schwestern",
          "text": "<a href=\"https://www.bergfex.ch/sommer/liechtenstein-oberland/touren/wanderung/6245,fuerstensteig-drei-schwestern/#:~:text=Als%20die%20klassiche%20Bergtour%20schlechthin,mit%20dem%20F%C3%BCrstensteig%20bezeichnet%20werden.&text=Der%20F%C3%BCrstensteig%20und%20der%20Drei,und%20aussichtsreichen%20Gratweg%20verbunden%20sind.\" target=\"_blank\"> Zusätzliche Informationen</a>"
        },
        {
          "yaw": 0.531771785695188,
          "pitch": -0.34726227150779465,
          "title": "Fürstensteig&nbsp;",
          "text": "<a href=\"https://www.schweizmobil.ch/de/wanderland/routen/route-0994.html\" target=\"_blank\"> Zusätzliche Informationen</a>"
        },
        {
          "yaw": 1.1140273464094328,
          "pitch": -0.04243193570859205,
          "title": "Uni",
          "text": "<a href=\"https://www.uni.li/de\" target=\"_blank\"> Zusätzliche Informationen</a>"
        },
        {
          "yaw": -1.672158146697031,
          "pitch": -0.0790873619934267,
          "title": "Hoher Kasten",
          "text": "<a href=\"https://www.hoherkasten.ch/entdecken/aktivitaeten/wandern/\" target=\"_blank\"> Zusätzliche Informationen</a>"
        },
        {
          "yaw": 1.823983500354168,
          "pitch": -0.060442956124965974,
          "title": "Pizol",
          "text": "<a href=\"https://pizol.com/?lang=de_CH\" target=\"_blank\"> Zusätzliche Informationen</a>"
        }
      ]
    },
    {
      "id": "7-7_fuerstensteig",
      "name": "7-Fuerstensteig",
      "CorrectAnswer": "A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5356471134968421,
        "pitch": 0.8961600090394146,
        "fov": 1.4041062726189781
      },
      "linkHotspots": [
        {
          "yaw": 0.6594364262852039,
          "pitch": 0.9493790442877756,
          "rotation": 0,
          "target": "7-7_fuerstensteig",
          "Question":"Finde den Trainee",
          "PosibleAnswares" :
              "<img src=\"/media/findTrainee.jpg\" class=\"img-fluid\" alt=\"Responsive image\">" +
              "<form>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\"  name=\"Option-8-8_fuerstensteig\" value=\"A\" id=\"flexRadioDefault73\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault73\">\n" +
              "\t\t\tC2\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-8-8_fuerstensteig\" value=\"B\" id=\"flexRadioDefault74\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault74\">\n" +
              "\t\t\tB3\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-8-8_fuerstensteig\" value=\"C\" id=\"flexRadioDefault75\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault75\">\n" +
              "\t\t\tA3\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<input type=\"button\" id=\"btn-8-8_fuerstensteig\" class=\"btn btn-light\" value=\"Next!\"/>\n" +
              "</form>"

        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-8_fuerstensteig",
      "name": "8-Fuerstensteig",
      "CorrectAnswer": "C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.6271982411693102,
        "pitch": 0.05695394378480856,
        "fov": 1.4041062726189781
      },
      "linkHotspots": [
        {
          "yaw": -0.023614855060834827,
          "pitch": 0.3035737951697861,
          "rotation": 0,
          "target": "9-9_ende",
          "Question": "Wie lautet die Nummer der Bergrettung in Liechtenstein?",
          "PosibleAnswares" :"<form>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\"  name=\"Option-9-9_ende\" value=\"A\" id=\"flexRadioDefault83\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault83\">\n" +
              "\t\t\t110\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-9-9_ende\" value=\"B\" id=\"flexRadioDefault84\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault84\">\n" +
              "\t\t\t32 16 8\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<div class=\"form-check\">\n" +
              "\t\t<input class=\"form-check-input\" type=\"radio\" name=\"Option-9-9_ende\" value=\"C\" id=\"flexRadioDefault85\">\n" +
              "\t\t<label class=\"form-check-label\" for=\"flexRadioDefault85\">\n" +
              "\t\t\t117\n" +
              "\t\t</label>\n" +
              "\t</div>\n" +
              "\t<input type=\"button\" id=\"btn-9-9_ende\" class=\"btn btn-light\" value=\"Next!\"/>\n" +
              "</form>"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-9_ende",
      "name": "9-Ende",
      "CorrectAnswer": "C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.0712129587699266,
        "pitch": 0.15737162655371328,
        "fov": 1.4041062726189781
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Exit Game - 32 Peaks",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
