echo http://$(ifconfig eth0 | awk '{if ($1=="inet") {print $2}}'):8080
echo http://$(ifconfig eth0 | awk '{if ($1=="inet") {print $2}}'):8080?video_id=9WGBuaa7eTs
node template.js
