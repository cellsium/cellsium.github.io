<?php

// Сзодание, изменение и удаление записей в БД

function publication($name,$header,$main)
{
  execQuery('INSERT INTO `group`(`name`, `header`, `main`) VALUES ("'.$name.'","'.$header.'","'.$main.'");');
};

function updatePublication($name,$header,$main,$nameUpdate)
{
  execQuery('UPDATE `group` SET `name`="'.$name.'",`header`="'.$header.'",`main`="'.$main.'" WHERE `name`="'.$nameUpdate.'";');
};

function deletePublication($name)
{
  execQuery('DELETE FROM `group` WHERE `name`="'.$name.'"');
};