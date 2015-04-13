#pragma strict

	function OnTriggerStay(other : Collider) 
	{
		if(other.collider.name == "Character")
		{
			GlobalStuff.HP -= 5;
			Destroy(this.gameObject);
		}
	}