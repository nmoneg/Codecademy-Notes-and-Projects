def ground_shipping_cost(weight):
  cost = 20

  if (weight <= 2):
    cost += weight * 1.5
  elif (weight > 2) and (weight <= 6):
    cost += weight * 3
  elif (weight > 6) and (weight <= 10):
    cost += weight * 4
  else:
    cost += weight * 4.75

  return cost

def drone_shipping_cost(weight):
  cost = 0

  if (weight <= 2):
    cost += weight * 4.5
  elif (weight > 2) and (weight <= 6):
    cost += weight * 9
  elif (weight > 6) and (weight <= 10):
    cost += weight * 12
  else:
    cost += weight * 14.25

  return cost

premium_ground_shipping_cost = 125.00

def cheapest_shipping_method(weight):
  ground = ground_shipping_cost(weight)
  drone = drone_shipping_cost(weight)
  premium = premium_ground_shipping_cost 
  choice = ""
  cost = 0

  if (ground <= drone) and (ground <= premium):
    choice = "ground"
    cost = ground
  elif (drone < ground) and (drone < premium):
    choice = "drone"
    cost = drone
  elif (premium < ground) and (premium < drone):
    choice = "premium ground"
    cost = premium

#The "format" function below converts cost into a number with two decimal places instead of one (To match conventional standards as how currency appears in print - in this case, 4.50 instead of 4.5) Note that the format function transforms the number put into it to a string. 
  cost = format(cost, ".2f") 
  print(f'The cheapest shipping method is {choice} shipping. It will cost ${cost}.')

# print(ground_shipping_cost(8.4))
# print(drone_shipping_cost(1.5))
cheapest_shipping_method(1)


  