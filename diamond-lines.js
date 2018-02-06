var scoot = 0
var loot = 170
var boot = 170
while (scoot<170){
  scoot = scoot + 10
  loot = loot - 10
  boot = boot + 10
	line(loot, scoot, boot, scoot)
}
while (scoot<340){
  scoot = scoot + 10
  loot = loot + 10
  boot = boot - 10
	line(loot, scoot, boot, scoot)
}
