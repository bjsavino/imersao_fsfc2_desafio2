import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Injectable()
export class RoutesService {
  create(createRouteDto: CreateRouteDto) {
    return 'This action adds a new route';
  }

  findAll() {
    const routes = [
      { title: 'Rota 1', startPosition: [12, 21], endPosition: [23, 21] },
      { title: 'Rota 2', startPosition: [11, 10], endPosition: [24, 42] },
      { title: 'Rota 3', startPosition: [15, 11], endPosition: [25, 43] },
      { title: 'Rota 4', startPosition: [16, 12], endPosition: [26, 44] },
      { title: 'Rota 5', startPosition: [17, 13], endPosition: [27, 45] },
    ];
    return routes;
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
