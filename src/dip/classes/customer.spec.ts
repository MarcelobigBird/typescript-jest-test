import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (firstname: string, lastname: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstname, lastname, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstname, lastname and cpf', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio Miranda', '111.111.111-11');
    expect(sut).toHaveProperty('firstname', 'Luiz');
    expect(sut).toHaveProperty('lastname', 'Otávio Miranda');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have method to get name and idn for individual customer', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio Miranda', '111.111.111-11');
    expect(sut.getName()).toBe('Luiz Otávio Miranda');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Facebook', '11.111.111/0001-11');
    expect(sut).toHaveProperty('name', 'Facebook');
    expect(sut).toHaveProperty('cnpj', '11.111.111/0001-11');
  });

  it('should have methods getName and getIDN for enterprise customer', () => {
    const sut = createEnterpriseCustomer('Facebook', '11.111.111/0001-11');
    expect(sut.getName()).toBe('Facebook');
    expect(sut.getIDN()).toBe('11.111.111/0001-11');
  });
});
