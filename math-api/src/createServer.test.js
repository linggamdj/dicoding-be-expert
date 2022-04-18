const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

describe('A HTTP Server', () => {
    describe('when GET /add', () => {
        it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
            // arrange
            const a = 10;
            const b = 20;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const server = createServer({ mathBasic: MathBasic });

            // action
            const response = await server.inject({
                method: 'GET',
                url: `/add/${a}/${b}`,
            });

            // assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(30);
            expect(spyAdd).toBeCalledWith(a, b);
        });
    });

    describe('when GET /subtract', () => {
        it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
          // Arrange
          const a = 12;
          const b = 8;
          const spySubtract = jest.spyOn(MathBasic, 'subtract');
          const server = createServer({ mathBasic: MathBasic });

          // Action
          const response = await server.inject({
            method: 'GET',
            url: `/subtract/${a}/${b}`,
          });

          // Assert
          const responseJson = JSON.parse(response.payload);
          expect(response.statusCode).toEqual(200);
          expect(responseJson.value).toEqual(4);
          expect(spySubtract).toBeCalledWith(a, b);
        });
    });

    describe('when GET /multiply', () => {
        it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', async () => {
          // Arrange
          const a = 3;
          const b = 3;
          const spyMultiply = jest.spyOn(MathBasic, 'multiply');
          const server = createServer({ mathBasic: MathBasic });

          // Action
          const response = await server.inject({
            method: 'GET',
            url: `/multiply/${a}/${b}`,
          });

          // Assert
          const responseJson = JSON.parse(response.payload);
          expect(response.statusCode).toEqual(200);
          expect(responseJson.value).toEqual(9);
          expect(spyMultiply).toBeCalledWith(a, b);
        });
    });

    describe('when GET /divide', () => {
        it('should respond with a status code of 200 and the payload value is division result of a and b correctly', async () => {
          // Arrange
          const a = 10;
          const b = 2;
          const spyDivide = jest.spyOn(MathBasic, 'divide');
          const server = createServer({ mathBasic: MathBasic });

          // Action
          const response = await server.inject({
            method: 'GET',
            url: `/divide/${a}/${b}`,
          });

          // Assert
          const responseJson = JSON.parse(response.payload);
          expect(response.statusCode).toEqual(200);
          expect(responseJson.value).toEqual(5);
          expect(spyDivide).toBeCalledWith(a, b);
        });
    });

    describe('when GET /rectangle/perimeter', () => {
        it('should respond with a status code of 200 and the payload value is the perimeter of rectangle result of a and b correctly', async () => {
          // Arrange
          const length = 3;
          const width = 2;
          const figureCalculator = new FigureCalculator(MathBasic);
          const spyRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
          const server = createServer({ figureCalculator });

          // Action
          const response = await server.inject({
            method: 'GET',
            url: `/rectangle/perimeter/${length}/${width}`,
          });

          // Assert
          const responseJson = JSON.parse(response.payload);
          expect(response.statusCode).toEqual(200);
          expect(responseJson.value).toEqual(10);
          expect(spyRectanglePerimeter).toBeCalledWith(length, width);
        });
    });

    describe('when GET /rectangle/area', () => {
        it('should respond with a status code of 200 and the payload value is the area of rectangle result of a and b correctly', async () => {
          // Arrange
          const length = 3;
          const width = 2;
          const figureCalculator = new FigureCalculator(MathBasic);
          const spyRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
          const server = createServer({ figureCalculator });

          // Action
          const response = await server.inject({
            method: 'GET',
            url: `/rectangle/area/${length}/${width}`,
          });

          // Assert
          const responseJson = JSON.parse(response.payload);
          expect(response.statusCode).toEqual(200);
          expect(responseJson.value).toEqual(6);
          expect(spyRectangleArea).toBeCalledWith(length, width);
        });
    });

    describe('when GET /triangle/perimeter', () => {
        it('should respond with a status code of 200 and the payload value is the perimeter of triangle result of a and b correctly', async () => {
          // Arrange
          const sideA = 3;
          const sideB = 2;
          const base = 10;
          const figureCalculator = new FigureCalculator(MathBasic);
          const spyTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
          const server = createServer({ figureCalculator });

          // Action
          const response = await server.inject({
            method: 'GET',
            url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
          });

          // Assert
          const responseJson = JSON.parse(response.payload);
          expect(response.statusCode).toEqual(200);
          expect(responseJson.value).toEqual(15);
          expect(spyTrianglePerimeter).toBeCalledWith(sideA, sideB, base);
        });
    });

    describe('when GET /triangle/area', () => {
        it('should respond with a status code of 200 and the payload value is the area of triangle result of a and b correctly', async () => {
          // Arrange
          const base = 10;
          const height = 10;
          const figureCalculator = new FigureCalculator(MathBasic);
          const spyTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
          const server = createServer({ figureCalculator });

          // Action
          const response = await server.inject({
            method: 'GET',
            url: `/triangle/area/${base}/${height}`,
          });

          // Assert
          const responseJson = JSON.parse(response.payload);
          expect(response.statusCode).toEqual(200);
          expect(responseJson.value).toEqual(50);
          expect(spyTriangleArea).toBeCalledWith(base, height);
        });
    });
});