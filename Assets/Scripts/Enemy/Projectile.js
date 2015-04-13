#pragma strict

	function OnTriggerEnter(other : Collider) 
	{
		if(other.collider.name == "Character")
		{
			GlobalStuff.HP --;
			Destroy(this.gameObject);
		}
	}