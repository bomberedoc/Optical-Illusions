import pygame
from pygame.locals import *
import math

width,height = 500,500
radius = 150
radius_small = 7
angle = 0

pygame.init()
FPSCLOCK = pygame.time.Clock()
screen = pygame.display.set_mode((width, height))
screen.fill((255,255,255))
pygame.display.set_caption("Circle Projections")
center = pygame.math.Vector2(250,250)
center_small = pygame.math.Vector2(radius,0)

def draw_structure(balls):
    rad=pygame.math.Vector2(150,0)
    center=pygame.math.Vector2(250,250)
    angle=math.pi/balls
    pygame.draw.line(screen,(0,0,0),center+rad,center-rad,1)
    for i in range(1,balls):
        new_right = center + rad.rotate(math.degrees(-i*angle))
        new_left = center - rad.rotate(math.degrees(-i*angle))
        pygame.draw.line(screen,(0,0,0),new_left,new_right,1)

def draw_circles(center,center_small,radius,radius_small,angle,balls,need):
    if need:
        pygame.draw.circle(screen,(0,0,0),(int(center.x),int(center.y)),radius,1)
    nangle=math.degrees(math.pi/balls)
    for i in range(balls):
        pygame.draw.circle(screen,(255,255,0),(250+int(radius*math.cos(math.radians(angle-i*nangle))*math.cos(math.radians(i*nangle))),
                                               250-int(radius*math.cos(math.radians(angle-i*nangle))*math.sin(math.radians(i*nangle)))),7)
    if need:
        pygame.draw.circle(screen, (124,69,82),
                                    (int(center_small.x),int(center_small.y)),radius_small)

balls = 2
running = True
structure = True
circ = True
while running:
    screen.fill((255,255,255))
    center_new = center + center_small.rotate(-angle)
    if structure:
        draw_structure(balls)
    draw_circles(center,center_new,radius,radius_small,angle,balls,circ)
    pygame.display.update()
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        if event.type == KEYDOWN:
            if event.key == K_UP and balls<20:
                balls+=1
            if event.key == K_DOWN and balls>2:
                balls-=1
            if event.key == K_s:
                structure = not structure
                circ = not circ
    angle = (angle+5) % 360
    FPSCLOCK.tick(20)

pygame.quit()