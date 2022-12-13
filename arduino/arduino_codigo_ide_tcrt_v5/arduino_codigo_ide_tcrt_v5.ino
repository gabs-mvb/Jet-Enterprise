
/**
* Configurações iniciais sobre o sensor
* TCRT5000
*/
 
int switch_pin = 7;

void setup()
{
Serial.begin(9600);

pinMode(switch_pin, INPUT);
}
void loop()
{
/**
* Bloco do TCRT5000
*/

if(digitalRead(switch_pin) == LOW){
  int prat1 = random(1, 4);
  
Serial.print(prat1);
Serial.print(";");
}

else {
Serial.print(0);
Serial.print(";");

}

int prat2 = random(0, 4);
int prat3 = random(2, 4);
int prat4 = 3;
int prat5 = random(3, 4);
int prat6 = random(2, 4);
int prat7 = 3;
int prat8 = 3;
int prat9 = 3;
int prat10 = 3;
int prat11 = random(0, 4);
int prat12 = random(0, 4);
int prat13 = random(3, 4);
int prat14 = random(2, 4);
int prat15 = random(1, 4);
int prat16 = 3;
int prat17 = 3;
int prat18 = random(1, 4);
int prat19 = random(1, 4);
int prat20 = random(2, 4);
int prat21 = random(3, 4);
int prat22 = random(0, 4);
int prat23 = random(2, 4);
int prat24 = 3;
int prat25 = 3;
int prat26 = random(3, 4);
int prat27 = random(2, 4);
int prat28 = random(1, 4);
int prat29 = 3;
int prat30 = 3;
int prat31 = 3;
int prat32 = 3;
int prat33 = 3;
int prat34 = 3;
int prat35 = random(1, 4);
int prat36 = random(1, 4);
int prat37 = random(2, 4);
int prat38 = random(1, 4);
int prat39 = 3;
int prat40 = random(1, 4);
int prat41 = random(0, 4);
int prat42 = random(0, 4);
int prat43 = random(0, 4);
int prat44 = 3;



Serial.print(prat2);
Serial.print(";");

Serial.print(prat3);
Serial.print(";");

Serial.print(prat4);
Serial.print(";");

Serial.print(prat5);
Serial.print(";");

Serial.print(prat6);
Serial.print(";");

Serial.print(prat7);
Serial.print(";");

Serial.print(prat8);
Serial.print(";");

Serial.print(prat9);
Serial.print(";");

Serial.print(prat10);
Serial.print(";");

Serial.print(prat11);
Serial.print(";");

Serial.print(prat12);
Serial.print(";");

Serial.print(prat13);
Serial.print(";");

Serial.print(prat14);
Serial.print(";");

Serial.print(prat15);
Serial.print(";");

Serial.print(prat16);
Serial.print(";");

Serial.print(prat17);
Serial.print(";");

Serial.print(prat18);
Serial.print(";");

Serial.print(prat19);
Serial.print(";");

Serial.print(prat20);
Serial.print(";");

Serial.print(prat21);
Serial.print(";");

Serial.print(prat22);
Serial.print(";");

Serial.print(prat23);
Serial.print(";");

Serial.print(prat24);
Serial.print(";");

Serial.print(prat25);
Serial.print(";");

Serial.print(prat26);
Serial.print(";");

Serial.print(prat27);
Serial.print(";");

Serial.print(prat28);
Serial.print(";");

Serial.print(prat29);
Serial.print(";");

Serial.print(prat30);
Serial.print(";");

Serial.print(prat31);
Serial.print(";");

Serial.print(prat32);
Serial.print(";");

Serial.print(prat33);
Serial.print(";");

Serial.print(prat34);
Serial.print(";");

Serial.print(prat35);
Serial.print(";");

Serial.print(prat36);
Serial.print(";");

Serial.print(prat37);
Serial.print(";");

Serial.print(prat38);
Serial.print(";");

Serial.print(prat39);
Serial.print(";");

Serial.print(prat40);
Serial.print(";");

Serial.print(prat41);
Serial.print(";");

Serial.print(prat42);
Serial.print(";");

Serial.print(prat43);
Serial.print(";");

Serial.print(prat44);
Serial.println(";");

delay(15000);
}
