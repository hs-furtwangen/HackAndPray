#pragma strict

var target : GameObject;
var startPosition : Vector3;
var Sound1 : AudioClip;
var Sound2 : AudioClip;
var Sound3 : AudioClip;
var Sound4 : AudioClip;
var Sound5 : AudioClip;
var Sound6 : AudioClip;

function Start() 
{
	target = gameObject.Find("Character_Controller/Character");
	startPosition = this.transform.position;
	
	GlobalStuff.SpawnEnemies(5);
}

function Update()
{
	this.transform.position = target.transform.position + startPosition;
	 
	if (!audio.isPlaying)
	{
		var randomNumber = Random.Range (0,6);	
		if(randomNumber == 0)
			audio.clip = Sound1;
		else if(randomNumber == 1)
			audio.clip = Sound2;
		else if(randomNumber == 2)
			audio.clip = Sound3;
		else if(randomNumber == 3)
			audio.clip = Sound3;
		else if(randomNumber == 4)
			audio.clip = Sound4;;
		else if(randomNumber == 5)
			audio.clip = Sound5;
			
		audio.Play();
	}
}