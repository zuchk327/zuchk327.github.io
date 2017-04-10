def floodfill(x, y, oldColor, newColor):

    # assume surface is a 2D image and surface[x][y] is the color at x, y.

    if surface[x][y] != oldColor: # the base case

        return

    surface[x][y] = newColor

    floodfill(x + 1, y, oldColor, newColor) # right

    floodfill(x - 1, y, oldColor, newColor) # left

    floodfill(x, y + 1, oldColor, newColor) # down

    floodfill(x, y - 1, oldColor, newColor) # up