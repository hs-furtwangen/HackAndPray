﻿using UnityEngine;
using System.Collections;

public class MainMenu : MonoBehaviour 
{

	public void StartGame() {
		Application.LoadLevel("Game");
	}

	public void Credits() {
		Application.LoadLevel("Credits");
	}

	public void Ende() {
		Application.Quit();
	}

}