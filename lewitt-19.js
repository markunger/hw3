var scoot = 0
var loot = 0
var boot = -20
var toot = -140
var goot = 0
while (scoot<120){
  scoot = scoot + 10
	line(scoot, 0, scoot, 400)
}

while (loot<380){
  loot = loot + 10
	line(120, loot, 400, loot)
}

while (boot<600){
  boot = boot + 10
  toot = toot + 10
  line(0,toot,120,boot)
}

while (goot<500){
  goot = goot + 10
  line(120,goot,400,(goot-120))
}
