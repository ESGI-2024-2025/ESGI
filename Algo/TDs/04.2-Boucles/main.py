
def main() -> int:
    
    rope = 200
    height = 0
    space = 0

    while height<rope:

        if height*(rope-2*height) < space:
            return height-1

        space = height*(rope-2*height)
        height += 1

if __name__ == "__main__":
    print(main())
