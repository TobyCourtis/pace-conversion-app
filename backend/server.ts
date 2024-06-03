import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';

const app: Express = express();
const port: number = 9999;

app.use(bodyParser.json());

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

let pacePairs: PacePair[] = [];
let pacePairIdCounter: number = 1;

app.post('/paces', (req: Request, res: Response) => {
    const {pace1, pace2} = req.body;

    if (!pace1 || !pace2 || !pace1.value || !pace1.units || !pace1.userId || !pace1.date || !pace2.value ||
        !pace2.units || !pace2.userId || !pace2.date) {
        return res.status(400).send('Both pace1 and pace2 with all fields (value, ' +
            'units, userId, and date) are required');
    }

    // Assign the next available ID to the new pace pair
    const id = pacePairIdCounter++;
    const newPacePair: PacePair = {id, pace1, pace2};
    pacePairs.push(newPacePair);

    res.status(201).send(newPacePair);
});

app.get('/paces/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const pacePair = pacePairs.find(pair => pair.id === id);

    if (!pacePair) {
        return res.status(404).send('Pace pair not found');
    }

    res.send(pacePair);
});

app.get('/all_paces', (req: Request, res: Response) => {
    console.log(pacePairs);
    res.send(pacePairs);
});

app.put('/paces/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const {pace1, pace2} = req.body;

    if (!pace1 || !pace2 || !pace1.value || !pace1.units || !pace1.userId || !pace1.date || !pace2.value ||
        !pace2.units || !pace2.userId || !pace2.date) {
        return res.status(400).send('Both pace1 and pace2 with all fields (value, units, userId,' +
            ' and date) are required');
    }

    const pacePairIndex = pacePairs.findIndex(pair => pair.id === id);

    if (pacePairIndex === -1) {
        return res.status(404).send('Pace pair not found');
    }

    pacePairs[pacePairIndex] = {id, pace1, pace2};

    res.send(pacePairs[pacePairIndex]);
});

app.delete('/paces/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const pacePairIndex = pacePairs.findIndex(pair => pair.id === id);

    if (pacePairIndex === -1) {
        return res.status(404).send('Pace pair not found');
    }

    pacePairs.splice(pacePairIndex, 1);

    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
