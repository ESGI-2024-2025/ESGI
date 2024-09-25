
def main() -> bool:
    
    year = input("Entrez votre année à tester: ")

    while not year.isdigit():
        year = input("Entrez votre année à tester: ")
    
    year = int(year)

    if year%4 == 0 and year%100 != 0:
        return True
    elif year%400 == 0:
        return True
    else:
        return False

if __name__ == "__main__":
    print(main())
