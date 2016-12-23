<?php

Class Mobile {
	private $mobiles = array(
		1 => "Galaxy S6",
		2 => "Galaxy S7",
		3 => "Galaxy S8",
		4 => "Galaxy S9",
		5 => "Galaxy S10",
		6 => "Galaxy S11"
		);

	public function getMobileArray() {
		return $this->mobiles;
	}

	public function getMobile($id) {
		return array($id => ($this->mobiles[$id]));
	}

}

?>