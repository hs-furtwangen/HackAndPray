#pragma strict

var openPortal : boolean = false;

function Start()
{
	 transform.root.gameObject.name = "Room";
}

function OnTriggerStay(collision : Collider) 
{
	if(collision.collider.name == "Character" && openPortal == true)
	{
		var Character :  GameObject = gameObject.Find("Character_Controller");
		
		GlobalStuff.CreateRoom();
	}
}