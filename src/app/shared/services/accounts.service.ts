export class AccountsService {
    userAccounts = [];

    createAccount(username: string, password: string) {
        this.userAccounts.push({
            username: username,
            password: password
        });
    }
}