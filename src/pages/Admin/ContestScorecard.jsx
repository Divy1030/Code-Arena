import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, Pencil, Ban } from 'lucide-react';

export default function ContestScorecard() {
  const [filter, setFilter] = useState('all');

  const participants = [
    { rank: 1, name: 'Alex Johnson', score: 950, problems: '8/8', time: '2h 45m', status: 'Completed' },
    { rank: 2, name: 'Alex Johnson', score: 950, problems: '8/8', time: '2h 45m', status: 'Completed' },
    { rank: 3, name: 'Alex Johnson', score: 950, problems: '7/8', time: '2h 45m', status: 'Completed' },
    { rank: 3, name: 'Alex Johnson', score: 950, problems: '7/8', time: '2h 45m', status: 'In Progress' },
  ];

  return (
    <div className="min-h-screen bg-[#131c3d] text-white p-10">

      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Weekly Contest #124</h2>
          <p className="text-sm text-gray-400">December 15, 2023 • 234 participants</p>
        </div>

        <Input placeholder="Search Contest" className="w-60" />
      </div>

      <Tabs defaultValue="all" className="mb-4 bg-[">
        <TabsList>
          <TabsTrigger value="all" onClick={() => setFilter('all')}>All Participants</TabsTrigger>
          <TabsTrigger value="completed" onClick={() => setFilter('Completed')}>Completed</TabsTrigger>
          <TabsTrigger value="in-progress" onClick={() => setFilter('In Progress')}>In Progress</TabsTrigger>
          <TabsTrigger value="disqualified" onClick={() => setFilter('Disqualified')}>Disqualified</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-[3fr_1fr] gap-6 mb-6">

      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <Table>
          <TableHeader className="bg-[#1f2a4d]">
            <TableRow>
              <TableHead className="text-white">Rank</TableHead>
              <TableHead className="text-white">Participant</TableHead>
              <TableHead className="text-white">Score</TableHead>
              <TableHead className="text-white">Problems</TableHead>
              <TableHead className="text-white">Time</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {participants
              .filter(p => filter === 'all' || p.status === filter)
              .map((p, i) => (
                <TableRow key={i} className="bg-[#101728]">
                  <TableCell>{p.rank}</TableCell>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.score}</TableCell>
                  <TableCell>{p.problems}</TableCell>
                  <TableCell>{p.time}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`text-xs ${p.status === 'Completed' ? 'bg-green-100 text-green-600' : p.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-600'}`}>
                      {p.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex gap-10">
                    <Pencil size={16} className="cursor-pointer hover:text-blue-400" />
                    <Eye size={16} className="cursor-pointer hover:text-blue-400" />
                    <Ban size={16} className="cursor-pointer text-red-500" />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <div className="text-sm text-gray-400 px-4 py-2">Showing 1 to 4 of 24 entries</div>
        <div className="flex justify-end px-4 pb-4">
          <div className="flex gap-2 text-black">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <Card className="bg-[#00234F] text-center">
          <CardContent className="py-4">
            <p className="text-sm text-blue-400">Average Score</p>
            <p className="text-2xl font-bold text-blue-400">785</p>
          </CardContent>
        </Card>
        <Card className="bg-[#003E13] text-center">
          <CardContent className="py-4">
            <p className="text-sm text-green-400">Highest Score</p>
            <p className="text-2xl font-bold text-green-400">950</p>
          </CardContent>
        </Card>
        <Card className="bg-[#27024C] text-center">
          <CardContent className="py-4">
            <p className="text-sm text-purple-400">Completion Rate</p>
            <p className="text-2xl font-bold text-purple-400">78%</p>
          </CardContent>
        </Card>
        <Card className="bg-[#3B2100] text-center">
          <CardContent className="py-4">
            <p className="text-sm text-yellow-400">Total Submissions</p>
            <p className="text-2xl font-bold text-yellow-400">1,247</p>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
}
