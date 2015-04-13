#pragma strict


static class GlobalStuff
{
	var Enemy : GameObject;
	var enemyNumber : int  = 5;
	var killCount : int = 0;
	var HP : int = 10;
	var room : GameObject = Resources.Load("Room") as GameObject;
	
	var enemy : GameObject;
	var enemy_Terrorist : GameObject = Resources.Load("Terrorist_Controller") as GameObject;
	var enemy_Nun : GameObject = Resources.Load("Nun_Controller") as GameObject;
	var enemy_Jew : GameObject = Resources.Load("Jew_Controller") as GameObject;
	var enemy_Monk : GameObject = Resources.Load("Monk_Controller") as GameObject;
	var enemy_KKK : GameObject = Resources.Load("KKK_Controller") as GameObject;
	
	var floor1 : GameObject;
	var floor2 : GameObject;
	var floor3 : GameObject;
	var floor4 : GameObject;
	var floor5 : GameObject;
	
	
	public function CreateRoom() : void
	{
		var oldRoom : GameObject = GameObject.Find("Room");
		var newRoom : GameObject = GameObject.Instantiate(room, oldRoom.transform.position, Quaternion.identity);

		enemyNumber += Random.Range(5, 50);
		SpawnEnemies(enemyNumber);
		
		SelectFloor(newRoom);
		
		UnityEngine.GameObject.Destroy(oldRoom);
	}
	
	/*
	* Called on enemy destroyed
	*/
	public function SetKillCount() : void
	{
		killCount ++;
		enemyNumber --;
		
		if (enemyNumber == 0)
		{
			var portal : Portal_Script = GameObject.Find("Room/Portal").GetComponent.<Portal_Script>();
			portal.openPortal = true;
		}
	}
	
	public function SpawnEnemies(_enemyNumber : int) : void
	{
		for(var i : int = 0; i != _enemyNumber; i++)
		{
			var randomPosX : float = Random.Range(-30.0f , 30.0f);
			var randomPosY : float = Random.Range(-15.0f , 15.0f);
			var randomSpawn : int = Random.Range(0, 5);
			
			if (randomSpawn == 0)
				enemy = enemy_Terrorist;
			else if (randomSpawn == 1)
				enemy = enemy_KKK;
			else if (randomSpawn == 2)
				enemy = enemy_Jew;
			else if (randomSpawn == 3)
				enemy = enemy_Monk;
			else
				enemy = enemy_Nun;

			GameObject.Instantiate (enemy, Vector3(randomPosX, randomPosY, 0), Quaternion.identity);
		}
	}
	
	
	public function SelectFloor(_room : GameObject) : void
	{
		var randomNumber : int = Random.Range(0,4);
		var floor : GameObject;
		
		if(randomNumber == 0)
			floor = Resources.Load("Floors/Floor1") as GameObject;
		else if(randomNumber == 1)
			floor = Resources.Load("Floors/Floor2") as GameObject;
		else if(randomNumber == 2)
			floor = Resources.Load("Floors/Floor3") as GameObject;
		else if(randomNumber == 3)
			floor = Resources.Load("Floors/Floor4") as GameObject;
		else
			floor = Resources.Load("Floors/Floor5") as GameObject;
			
		var newFloor : GameObject = GameObject.Instantiate (floor, _room.transform.position, Quaternion.identity);
		newFloor.transform.parent = _room.transform;
			
		/*
		floor1 = GameObject.Find("Room/Floor1");
		floor2 = GameObject.Find("Room/Floor2");
		floor3 = GameObject.Find("Room/Floor3");
		floor4 = GameObject.Find("Room/Floor4");
		floor5 = GameObject.Find("Room/Floor5");
	
		var randomNumber : int = Random.Range(0,4);
		
		floor1.renderer.enabled = false;
		floor2.renderer.enabled = false;
		floor3.renderer.enabled = false;
		floor4.renderer.enabled = false;
		floor5.renderer.enabled = false;
		
		if(randomNumber == 0)
			floor1.renderer.enabled = true;
		else if(randomNumber == 1)
			floor2.renderer.enabled = true;
		else if(randomNumber == 2)
			floor3.renderer.enabled = true;
		else if(randomNumber == 3)
			floor4.renderer.enabled = true;
		else
			floor5.renderer.enabled = true;
		*/
	}
}