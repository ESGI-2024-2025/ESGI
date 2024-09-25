
def main() -> int:
    
    actual_participant = 3000
    maximum_participant = 8000
    price = 50

    while (
    price * actual_participant < (price - 0.6) * (actual_participant + 100)
    and actual_participant+100 <= maximum_participant
    ):
        actual_participant += 100
        price -= 0.6
    
    return price

if __name__ == "__main__":
    print(main())
