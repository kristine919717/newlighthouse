function story1scrolldown(){
  //progressline//
  document.getElementById("1").setAttribute("opacity", "1" );
  document.getElementById("1").setAttribute("fill", "#FFFFFF" );

  //scroll down hide------------------
  $(".mouse_scroll2").hide();

          $(".cover-color").delay(500);
        $(".cover-color").animate({
          opacity:0,
        },2100,"linear",function(){
          $(this).hide();

        });
        $(".story-2").animate({
          opacity:0,
        },1700,"linear",function(){
          $(this).hide();
        });
        $(".second").animate({
          opacity:0,
        },1700,"linear",function(){
          $(this).hide();
        });
        //-----show-------

                $(".cover-bw").delay(1000);
              $(".cover-bw").animate({
                opacity:1,
              },3500,"linear",function(){
              });

              $(".first").delay(3500);
            $(".first").animate({
              opacity:0.8,
              top:"46vh",
            },1300,"linear",function(){
              $(document.body).css({
                "overflow-x":"auto",
                "overflow-y":"auto"
              });

            });
}
function story1scrollup(){

  //scroll up hide-----------------------------
  $(".story-2").animate({
    opacity:0,
  },700,"linear",function(){
    $(this).hide();
  });
  $(".second").animate({
    opacity:0,
  },700,"linear",function(){
    $(this).hide();
  });
  $(".story-2-hover-area").animate({
    opacity:0,
  },700,"linear",function(){
    $(this).hide();
  });

  //-----show-------
          $(".cover-bw").delay(1000);
        $(".cover-bw").animate({
          opacity:1,
        },1500,"linear",function(){
        });
  $(".first").show();
  $(".cover-bw").show();
        $(".first").delay(3500);
      $(".first").animate({
        opacity:0.8,
        top:"46vh",
      },1300,"linear",function(){
        $(document.body).css({
          "overflow-x":"auto",
          "overflow-y":"auto"
        });

      });

}
function story2scrolldown(){
  //progressline//
  document.getElementById("2").setAttribute("opacity", "1" );
  document.getElementById("2").setAttribute("fill", "#FFFFFF" );
    //scroll down hide------------------------
  $(".first").animate({
    opacity:0,
  },1700,"linear",function(){
  });
  $(".cover-bw").animate({
    opacity:0,
  },1300,"linear",function(){
    $(this).hide();

  });
  //show---------------------

        $(".second").delay(2200);
        $(".second").show();
      $(".second").animate({
        opacity:0.8,
        top:"36vh",
      },1500,"linear",function(){
      });
      $(".story-2").show();
      $(".story-2").delay(800);
    $(".story-2").animate({
      opacity:1,
    },1800,"linear",function(){
      $(document.body).css({
        "overflow-x":"auto",
        "overflow-y":"auto"
      });
    });
}
function story2scrollup(){
  //scroll up hide-----------------------------
  $(".story-3").animate({
    opacity:0,
  },700,"linear",function(){
    $(this).hide();
  });
  $(".third").animate({
    opacity:0,
  },700,"linear",function(){
    $(this).hide();
  });
  $(".story-3-hover-area").animate({
    opacity:0,
  },700,"linear",function(){
    $(this).hide();
  });

  //show---------------------

        $(".second").delay(2200);
        $(".second").show();
      $(".second").animate({
        opacity:0.8,
        top:"36vh",
      },1500,"linear",function(){
      });
      $(".story-2").show();
      $(".story-2").delay(800);
    $(".story-2").animate({
      opacity:1,
    },1500,"linear",function(){
      $(document.body).css({
        "overflow-x":"auto",
        "overflow-y":"auto"
      });
    });
}
function story3scrolldown(){
  //progressline//
  document.getElementById("3").setAttribute("opacity", "1" );
  document.getElementById("3").setAttribute("fill", "#FFFFFF" );
  //----------scroll down hide---------
$(".second").animate({
  opacity:0,
},1700,"linear",function(){
});
  // $(".story-2").delay(200);
$(".story-2").animate({
  opacity:0,
},1700,"linear",function(){
  $(".story-3-hover-area").show();

  $(this).hide();
});

//-----------------show--------------
$(".story-3").show();
$(".third").show();
$(".story-3-hover-area").show();
$(".thirdtriggertext").show();
$(".story-3-hover-area").delay(1000);
$(".story-3-hover-area").animate({
opacity:1,
},3500,"linear",function(){
});
$(".story-3-hover").show();
        $(".story-3").delay(1000);
      $(".story-3").animate({
        opacity:1,
      },3500,"linear",function(){
      });
      $(".story-3-hoverarea").delay(1000);
      $(".story-3-hoverarea").animate({
        opacity:0.9,
      },3500,"linear",function(){
      });
    $(".story-3").animate({
      opacity:1,
    },3500,"linear",function(){
    });

      $(".third").delay(2000);
    $(".third").animate({
      opacity:0.8,
      top:"36vh",
    },1700,"linear",function(){
      $(document.body).css({
        "overflow-x":"auto",
        "overflow-y":"auto"
      });
    });
}
function story3scrollup(){
  //---------------scroll up hide
    $(".story-4").animate({
      opacity:0,
    },1700,"linear",function(){
      $(this).hide();
    });
    $(".fourth").animate({
      opacity:0,
    },1700,"linear",function(){
      $(this).hide();
    });
    $(".story-4-hover-area").animate({
      opacity:0,
    },1700,"linear",function(){
      $(this).hide();
    });
    $(".fourthtriggertext").animate({
      opacity:0,
    },1700,"linear",function(){
      $(this).hide();
    });
    $(".fourthclicktext").animate({
      opacity:0,
    },1700,"linear",function(){
      $(this).hide();
    });

    //-----------------show--------------
    $(".story-3").show();
    $(".third").show();
    $(".story-3-hover-area").show();
    $(".thirdtriggertext").show();
    $(".story-3-hover-area").delay(1000);
    $(".story-3-hover-area").animate({
    opacity:1,
    },3500,"linear",function(){
    });
    $(".story-3-hover").show();
            $(".story-3").delay(1000);
          $(".story-3").animate({
            opacity:1,
          },3500,"linear",function(){
          });
          $(".story-3-hoverarea").delay(1000);
          $(".story-3-hoverarea").animate({
            opacity:0.9,
          },3500,"linear",function(){
          });
        $(".story-3").animate({
          opacity:1,
        },3500,"linear",function(){
        });

          $(".third").delay(2000);
        $(".third").animate({
          opacity:0.8,
          top:"36vh",
        },1700,"linear",function(){
          $(document.body).css({
            "overflow-x":"auto",
            "overflow-y":"auto"
          });
        });
}
function story4scrolldown(){
  //progressline//
  document.getElementById("4").setAttribute("opacity", "1" );
  document.getElementById("4").setAttribute("fill", "#FFFFFF" );
  //scrolldownhide-------------
  $(".story-3-hover").animate({
    opacity:0,
  },1200,"linear",function(){
    $(this).hide();
  });
$(".story-3-hover-area").animate({
opacity:0,
},1,"linear",function(){
$(this).hide();
});
$(".third").animate({
opacity:0,
},1200,"linear",function(){
$(this).hide();
});
$(".thirdclicktext").animate({
opacity:0,
},1200,"linear",function(){
$(this).hide();
});
$(".thirdtriggertext").animate({
opacity:0,
},1200,"linear",function(){
$(this).hide();
});
$(".story-3").animate({
opacity:0,
},1200,"linear",function(){
$(this).hide();
});
//show------------
$(".story-4").show();
$(".story-4-hover").show();
$(".story-4-hover-area").show();
$(".fourthtriggertext").show();
$(".fourth").show();
$(".story-4-hover-area").delay(1000);
$(".story-4-hover-area").animate({
  opacity:1,
},3000,"linear",function(){
});
        $(".story-4").delay(500);
      $(".story-4").animate({
        opacity:1,
      },3000,"linear",function(){
      });

      $(".fourth").delay(1500);
    $(".fourth").animate({
      opacity:0.8,
      top:"54vh",
    },1500,"linear",function(){
      $(document.body).css({
        "overflow-x":"auto",
        "overflow-y":"auto"
      });
    });
}
function story4scrollup(){
  //scroll up hide------
  $(".story-5").animate({
  opacity:0,
},1700,"linear",function(){
  $(this).hide();
});
$(".story-5-hover").animate({
  opacity:0,
},1700,"linear",function(){
  $(this).hide();
});
$(".fifth").animate({
  opacity:0,
},1700,"linear",function(){
  $(this).hide();
});
$(".story-5-hover-area").animate({
  opacity:0,
},1700,"linear",function(){
  $(this).hide();
});
$(".fifthtriggertext").animate({
  opacity:0,
},1700,"linear",function(){
  $(this).hide();
});
//show------------
$(".story-4").show();
$(".story-4-hover").show();
$(".story-4-hover-area").show();
$(".fourthtriggertext").show();
$(".fourth").show();
$(".story-4-hover-area").delay(1000);
$(".story-4-hover-area").animate({
  opacity:1,
},3000,"linear",function(){
});
        $(".story-4").delay(500);
      $(".story-4").animate({
        opacity:1,
      },3000,"linear",function(){
      });

      $(".fourth").delay(1500);
    $(".fourth").animate({
      opacity:0.8,
      top:"54vh",
    },1500,"linear",function(){
      $(document.body).css({
        "overflow-x":"auto",
        "overflow-y":"auto"
      });
    });
}
function story5scrolldown(){
  //progressline//
  document.getElementById("5").setAttribute("opacity", "1" );
  document.getElementById("5").setAttribute("fill", "#FFFFFF" );
  //scroll down hide--------
  $(".fourthclicktext").hide()
  $(".fourthtriggertext").hide()
          $(".story-4-hover").animate({
            opacity:0,
          },1200,"linear",function(){
            $(this).hide();
          });
    $(".story-4-hover-area").animate({
      opacity:0,
    },1,"linear",function(){
      $(this).hide();
    });

    $(".fourth").animate({
      opacity:0,
    },1200,"linear",function(){
      $(this).hide();
    });

  $(".story-4").animate({
    opacity:0,
  },1200,"linear",function(){
    $(this).hide();
  });
  //show-------
  $(".story-5-hover-area").show();
  $(".story-5").show();
  $(".fifth").show();
  $(".story-5-hover-area").delay(800);
  $(".story-5-hover-area").animate({
    opacity:1,
  },2000,"linear",function(){
  });
  $(".fifthtriggertext").show();
          $(".story-5").delay(1400);
        $(".story-5").animate({
          opacity:1,
        },2000,"linear",function(){
        });

        $(".fifth").delay(1200);
      $(".fifth").animate({
        opacity:0.8,
        top:"42vh",
      },1100,"linear",function(){
        $(document.body).css({
          "overflow-x":"auto",
          "overflow-y":"auto"
        });
      });
}
function story5scrollup(){
  //scroll up hide------
  $(".story-6").animate({
    opacity:0,
  },1700,"linear",function(){
    $(this).hide();
  });
  $(".sixth").animate({
    opacity:0,
  },1700,"linear",function(){
    $(this).hide();
  });
  $(".story-6-hover-area").animate({
    opacity:0,
  },1700,"linear",function(){
    $(this).hide();
  });
  $(".sixthtriggertext").animate({
    opacity:0,
  },1700,"linear",function(){
    $(this).hide();
  });
  //show-------
  $(".story-5-hover-area").show();
  $(".story-5").show();
  $(".fifth").show();
  $(".story-5-hover-area").delay(800);
  $(".story-5-hover-area").animate({
    opacity:1,
  },2000,"linear",function(){
  });
  $(".fifthtriggertext").show();
          $(".story-5").delay(1400);
        $(".story-5").animate({
          opacity:1,
        },2000,"linear",function(){
        });

        $(".fifth").delay(1200);
      $(".fifth").animate({
        opacity:0.8,
        top:"42vh",
      },1100,"linear",function(){
        $(document.body).css({
          "overflow-x":"auto",
          "overflow-y":"auto"
        });
      });
}
function story6scrolldown(){
  //progressline//
  document.getElementById("6").setAttribute("opacity", "1" );
  document.getElementById("6").setAttribute("fill", "#FFFFFF" );
  //scrolldownhide-------------
  $(".story-5-hover").animate({
    opacity:0,
  },1200,"linear",function(){
    $(this).hide();
  });
$(".story-5-hover-area").animate({
opacity:0,
},1200,"linear",function(){
$(this).hide();
});
$(".fifth").animate({
opacity:0,
},1200,"linear",function(){
$(this).hide();
});
$(".fifthclicktext").animate({
opacity:0,
},1200,"linear",function(){
$(this).hide();
});
$(".fifthtriggertext").animate({
opacity:0,
},1200,"linear",function(){
$(this).hide();
});
$(".story-5").animate({
opacity:0,
},1200,"linear",function(){
$(this).hide();
});

//show------------
$(".story-6").show();
$(".story-6-hover").show();
$(".story-6-hover-area").show();
$(".sixthtriggertext").show();
$(".sixth").show();
$(".story-6-hover-area").delay(800);
$(".story-6-hover-area").animate({
  opacity:1,
},3000,"linear",function(){
});
        $(".story-6").delay(800);
      $(".story-6").animate({
        opacity:1,
      },3000,"linear",function(){
      });

      $(".sixth").delay(1500);
    $(".sixth").animate({
      opacity:0.8,
      top:"24vh",
    },1500,"linear",function(){
      $(document.body).css({
        "overflow-x":"auto",
        "overflow-y":"auto"
      });
    });
}
function story6scrollup(){

  //scroll up hide------
  $(".story-7").animate({
    opacity:0,
  },1700,"linear",function(){
    $(this).hide();
  });
  $(".story-7-hover").animate({
    opacity:0,
  },1700,"linear",function(){
    $(this).hide();
  });
  $(".seventh").animate({
    opacity:0,
  },1700,"linear",function(){
    $(this).hide();
  });
  $(".story-7-hover-area").animate({
    opacity:0,
  },1700,"linear",function(){
    $(this).hide();
  });
  $(".seventhtriggertext").animate({
    opacity:0,
  },1700,"linear",function(){
    $(this).hide();
  });

  //show------------
  $(".story-6").show();
  $(".story-6-hover").show();
  $(".story-6-hover-area").show();
  $(".sixthtriggertext").show();
  $(".sixth").show();
  $(".story-6-hover-area").delay(800);
  $(".story-6-hover-area").animate({
    opacity:1,
  },3000,"linear",function(){
  });
          $(".story-6").delay(800);
        $(".story-6").animate({
          opacity:1,
        },3000,"linear",function(){
        });

        $(".sixth").delay(1500);
      $(".sixth").animate({
        opacity:0.8,
        top:"24vh",
      },1500,"linear",function(){
        $(document.body).css({
          "overflow-x":"auto",
          "overflow-y":"auto"
        });
      });
}
function story7scrolldown(){
  //progressline//
  document.getElementById("7").setAttribute("opacity", "1" );
  document.getElementById("7").setAttribute("fill", "#FFFFFF" );
  //scroll down hide--------------------
  $(".story-6-hover").animate({
    opacity:0,
  },1200,"linear",function(){
    $(this).hide();
  });
  $(".story-6-hover-area").animate({
  opacity:0,
  },1200,"linear",function(){
  $(this).hide();
  });
  $(".sixth").animate({
  opacity:0,
  },1200,"linear",function(){
  $(this).hide();
  });
  $(".sixthclicktext").animate({
  opacity:0,
  },1200,"linear",function(){
  $(this).hide();
  });
  $(".sixthtriggertext").animate({
  opacity:0,
  },1200,"linear",function(){
  $(this).hide();
  });
  $(".story-6").animate({
  opacity:0,
  },1200,"linear",function(){
  $(this).hide();
  });
  //show------------
  $(".story-7").show();
  $(".story-7-hover").show();
  $(".seventh").show();
  $(".story-7-hover-area").show();
  $(".seventhtriggertext").show();
  $(".story-7-hover-area").delay(1000);
  $(".story-7-hover-area").animate({
    opacity:0.9,
  },3500,"linear",function(){
  });
          $(".story-7").delay(800);
        $(".story-7").animate({
          opacity:1,
        },3000,"linear",function(){
        });

        $(".seventh").delay(1500);
      $(".seventh").animate({
        opacity:0.8,
        top:"16vh",
      },1500,"linear",function(){
        $(document.body).css({
          "overflow-x":"auto",
          "overflow-y":"auto"
        });
      });
}
