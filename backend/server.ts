import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(bodyParser.json());

type Pace = {
    value: number;
    units: string;
    userId: string;
    date: string;
};

type PacePair = {
    id: string;
    pace1: Pace;
    pace2: Pace;
};

let pacePairs: { [id: string]: PacePair } = {};

app.post('/paces', (req: Request, res: Response) => {
    const { pace1, pace2 } = req.body;

    if (!pace1 || !pace2 || !pace1.value || !pace1.units || !pace1.userId || !pace1.date || !pace2.value || !pace2.units || !pace2.userId || !pace2.date) {
        return res.status(400).send('Both pace1 and pace2 with all fields (value, units, userId, and date) are required');
    }

    const id = `${pace1.userId}-${pace1.date}-${pace1.value}-${pace1.units}-${pace2.value}-${pace2.units}`;
    const newPacePair: PacePair = { id, pace1, pace2 };
    pacePairs[id] = newPacePair;

    res.status(201).send(newPacePair);
});

app.get('/paces/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const pacePair = pacePairs[id];

    if (!pacePair) {
        return res.status(404).send('Pace pair not found');
    }

    res.send(pacePair);
});

app.put('/paces/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const { pace1, pace2 } = req.body;

    if (!pace1 || !pace2 || !pace1.value || !pace1.units || !pace1.userId || !pace1.date || !pace2.value || !pace2.units || !pace2.userId || !pace2.date) {
        return res.status(400).send('Both pace1 and pace2 with all fields (value, units, userId, and date) are required');
    }

    if (!pacePairs[id]) {
        return res.status(404).send('Pace pair not found');
    }

    const updatedPacePair: PacePair = { id, pace1, pace2 };
    pacePairs[id] = updatedPacePair;

    res.send(updatedPacePair);
});

app.delete('/paces/:id', (req: Request, res: Response) => {
    const id = req.params.id;

    if (!pacePairs[id]) {
        return res.status(404).send('Pace pair not found');
    }

    delete pacePairs[id];
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
