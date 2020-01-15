  function DiseaseTable()
  {
    var Roll = parseInt(window.prompt("Roll?","0"));
    if (Roll > 100)
    {
      Roll = 200 - Roll;
    }
    if (Roll < 0)
    {
      Roll = 0 - Roll;
    }
    alert(document.getElementById('DieseseTable').rows[Roll+1].cells[1].innerHTML)
  }
  function BuffTable()
  {
    var Roll = parseInt(window.prompt("Percent Roll?","0")) - 1;
    var Roll2 = parseInt(window.prompt("Small Roll?","1"));
    if (Roll > 99)
    {
      Roll = 199 - Roll;
    }
    if (Roll < 0)
    {
      Roll = 0 - Roll;
    }
    alert(document.getElementById('BuffTable').rows[Roll+1].cells[1].innerHTML + Roll2 + " days")
  }
  function STMadness()
  {
    var Roll = parseInt(window.prompt("Percent Roll?","1"))-1;
    var Roll2 = parseInt(window.prompt("1d4","1"));
    var text = ""
    if (Roll < 20)
    {
      text = "The character retreats into his or her mind and becomes paralyzed. The effect ends if the character takes any damage."
    }
    else if (Roll < 30)
    {
      text = "The character becomes incapacitated and spends the duration screaming, laughing, or weeping."
    }
    else if (Roll < 40)
    {
      text = "The character becomes frightened and must use his or her action and movement each round to flee from the source of the fear."
    }
    else if (Roll < 50)
    {
      text = "The character begins babbling and is incapable of normal speech or spellcasting."
    }
    else if (Roll < 60)
    {
      text = "The character must use his or her action each round to attack the nearest creature."
    }
    else if (Roll < 70)
    {
      text = "The character experiences vivid hallucinations and has disadvantage on ability checks."
    }
    else if (Roll < 75)
    {
      text = "The character does whatever anyone tells him or her to do that isn't obviously self-destructive."
    }
    else if (Roll < 80)
    {
      text = "The character experiences an overpowering urge to eat something strange such as dirt, slime, or offal."
    }
    else if (Roll < 90)
    {
      text = "The character is stunned."
    }
    else if (Roll < 100)
    {
      text = "The character falls unconcious."
    }
    alert(text + " This lasts for " + Roll2 + " hours")
  }
  function LTMadness()
  {
    var Roll = parseInt(window.prompt("Percent Roll?","1"))-1;
    var Roll2 = parseInt(window.prompt("1d8","1"));
    var text = ""
    if (Roll < 10)
    {
      text = "The character feels compelled to repeat a specific activity over and over, such as washing hands, touching things, praying, or counting coins."
    }
    else if (Roll < 20)
    {
      text = "The character experiences vivid hallucinations and has disadvantage on ability checks."
    }
    else if (Roll < 30)
    {
      text = "The character suffers extreme paranoia. The character has disadvantage on Wisdom and Charisma checks"
    }
    else if (Roll < 40)
    {
      text = "The character regards something (usually the source of madness) with intense revulsion, as if affected by the antipathy effect of the antipathy/sympathy spell."
    }
    else if (Roll < 45)
    {
      text = "The character experiences a powerful delusion. Choose a potion. The character imagines that he or she is under its effects."
    }
    else if (Roll < 55)
    {
      text = 'The character becomes attached to a "lucky charm," such as a person or an object, and has disadvantage on attack rolls, ability checks, and saving throws while more than 30 feet from it.'
    }
    else if (Roll < 65)
    {
      text = "The character is blinded (25%) or deafened (75%)."
    }
    else if (Roll < 75)
    {
      text = "The character experiences uncontrollable tremors or tics, which impose disadvantage on attack rolls, ability checks, and saving throws that involve Strength or Dexterity."
    }
    else if (Roll < 85)
    {
      text = "The character suffers from partial amnesia. The character knows who he or she is and retains racial traits and class features, but doesn't recognize other people or remember anything that happened before the madness took effect."
    }
    else if (Roll < 90)
    {
      text = "Whenever the character takes damage, he or she must succeed on a DC 15 Wisdom saving throw or be affected as though he or she failed a saving throw against the confusion spell. The confusion effect lasts for 1 minute."
    }
    else if (Roll < 95)
    {
      text = "The character loses the ability to speak."
    }
    else if (Roll < 100)
    {
      text = "The character falls unconscious. No amount of jostling or damage can wake the character."
    }
    alert(text + " This lasts for " + Roll2 + " days")
  }
  function InMadness()
  {
    var Roll = parseInt(window.prompt("Percent Roll?","1"))-1;
    var text = ""
    if (Roll < 15)
    {
      text = "Being drunk keeps me sane."
    }
    else if (Roll < 25)
    {
      text = "I keep whatever I find."
    }
    else if (Roll < 30)
    {
      text = "I try to become more like someone else I know—adopting his or her style of dress, mannerisms, and name."
    }
    else if (Roll < 35)
    {
      text = "I must bend the truth, exaggerate, or outright lie to be interesting to other people."
    }
    else if (Roll < 45)
    {
      text = "Achieving my goal is the only thing of interest to me, and I'll ignore everything else to pursue it."
    }
    else if (Roll < 50)
    {
      text = "I find it hard to care about anything that goes on around me."
    }
    else if (Roll < 55)
    {
      text = "I don't like the way people judge me all the time."
    }
    else if (Roll < 70)
    {
      text = "I am the smartest, wisest, strongest, fastest, and most beautiful person I know."
    }
    else if (Roll < 80)
    {
      text = 	"I am convinced that powerful enemies are hunting me, and their agents are everywhere I go. I am sure they're watching me all the time."
    }
    else if (Roll < 85)
    {
      text = "There's only one person I can trust. And only I can see this special friend."
    }
    else if (Roll < 95)
    {
      text = 	"I can't take anything seriously. The more serious the situation, the funnier I find it."
    }
    else if (Roll < 100)
    {
      text = 	"I've discovered that I really like killing people."
    }
    alert(text + " This lasts until cured")
  }
  function SpecialBuffTable()
  {
    var Roll = parseInt(window.prompt("Roll?","0"))+1;
    Roll = Math.ceil(Roll/4)-1
    alert(document.getElementById('SpecialBuffTable').rows[Roll].cells[0].innerHTML + "\n" + document.getElementById('SpecialBuffTable').rows[Roll].cells[1].innerHTML)
  }
  function PrimalBeastTable()
  {
    var Roll = parseInt(window.prompt("Roll? (1d12)","0"))-1;
    alert(document.getElementById('PrimalBeastTable').rows[Roll].cells[0].innerHTML + "\n" + document.getElementById('PrimalBeastTable').rows[Roll].cells[1].innerHTML)
  }
