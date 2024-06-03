import axios, {AxiosInstance, AxiosResponse} from 'axios';

type Pace = {
    value: number;
    units: string;
    userId: string;
    date: string;
};

type PacePair = {
    id: number;
    pace1: Pace;
    pace2: Pace;
};

class BackendClient {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({baseURL});
    }

    async createPacePair(pace1: Pace,
                         pace2: Pace): Promise<PacePair> {
        const response: AxiosResponse<PacePair> = await this.axiosInstance.post('/paces', {pace1, pace2});
        return response.data;
    }

    async getPacePair(id: number): Promise<PacePair> {
        const response: AxiosResponse<PacePair> = await this.axiosInstance.get(`/paces/${id}`);
        return response.data;
    }

    async updatePacePair(id: number,
                         pace1: Pace,
                         pace2: Pace): Promise<PacePair> {
        const response: AxiosResponse<PacePair> = await this.axiosInstance.put(`/paces/${id}`, {pace1, pace2});
        return response.data;
    }

    async deletePacePair(id: number): Promise<void> {
        await this.axiosInstance.delete(`/paces/${id}`);
    }
}

export default BackendClient;

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function performCRUDOperation(choice: number) {
    const client = new BackendClient('http://localhost:9999');

    switch (choice) {
        case 1:
            var pace1: Pace = {value: 100, units: 'min/km', userId: 'user1', date: '2024-06-01'};
            var pace2: Pace = {value: 9, units: 'km/h', userId: 'user1', date: '2024-06-01'};
            var createdPacePair = await client.createPacePair(pace1, pace2);
            console.log('Created Pace Pair:', createdPacePair);
            break;
        case 2:
            var fetchedPacePair = await client.getPacePair(1);
            console.log('Fetched Pace Pair:', fetchedPacePair);
            break;
        case 3:
            var updatedPace1: Pace = {value: 110, units: 'min/km', userId: 'user1', date: '2024-06-01'};
            var updatedPace2: Pace = {value: 10, units: 'km/h', userId: 'user1', date: '2024-06-01'};
            var updatedPacePair = await client.updatePacePair(1, updatedPace1, updatedPace2);
            console.log('Updated Pace Pair:', updatedPacePair);
            break;
        case 4:
            await client.deletePacePair(1);
            console.log('Deleted Pace Pair');
            break;
        default:
            console.log('Invalid choice');
    }

    rl.close();
}

rl.question('Choose operation (1: Create, 2: Read, 3: Update, 4: Delete): ', (choice) => {
    performCRUDOperation(parseInt(choice));
});

