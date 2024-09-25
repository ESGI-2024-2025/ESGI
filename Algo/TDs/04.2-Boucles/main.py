
def main() -> int:
    
    rope = 200
    height = 0
    space = 0

    while height<rope:

        width = (rope-2*height)

        if height*width < space:
            return height-1

        space = height*width
        height += 1

if __name__ == "__main__":
    print(main())
