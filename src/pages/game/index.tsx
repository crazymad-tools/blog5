import React, { useState, useEffect } from "react";
import "./index.scss";

interface Props {}

const TERRAIN_TYPE = [
  {
    color: "lightgreen",
    name: ""
  },
  {
    color: "lightskyblue",
    name: ""
  },
  {
    color: "#E8A264",
    name: ""
  },
  {
    color: "black",
    name: ""
  },
  {
    color: "#1890ff",
    name: ""
  },
  {
    color: "white",
    name: ""
  }
];

const DRAW_TYPE = [
  {
    name: "单点"
  },
  {
    name: "刷子"
  },
  {
    name: "区域"
  }
];

const beginPoint = {
  x: 0,
  y: 0
};

const Game: React.FC<Props> = props => {
  const [terrain, setTerrain] = useState<number[][]>([]);
  const [currentBrush, setCurrentBrush] = useState<any>(null);
  const [drawType, setDrawType] = useState<number>(0);
  const [drawing, setDrawing] = useState<boolean>(false);
  const [selection, setSelection] = useState<boolean>(false);
  const [begin, setBegin] = useState<any>();
  const [moving, setMoving] = useState<any>();

  useEffect(() => {
    let terrain = Array.from(new Array(50).keys()).map(index => {
      return Array.from(new Array(50).keys()).map(() => 5);
    });
    setTerrain(terrain);
  }, []);

  function update(row: number, col: number) {
    if (drawType !== 0) return;

    terrain[row][col] = currentBrush;
    setTerrain(terrain.concat([]));
  }

  function move(row: number, col: number) {
    if (drawType !== 1 || !drawing) return;

    terrain[row][col] = currentBrush;
    setTerrain(terrain.concat([]));
  }

  function onMouseDown(row: number, col: number) {
    if (drawType === 1) {
      setDrawing(true);
      terrain[row][col] = currentBrush;
      setTerrain(terrain.concat([]));
    } else {
      setDrawing(false);
    }

    if (drawType === 2) {
      let e: any = window.event;
      setSelection(true);
      setBegin({
        left: e.pageX + "px",
        top: e.pageY + "px"
      });
      beginPoint.x = e.pageX;
      beginPoint.y = e.pageY;
    }
  }

  function onMouseUp(row: number, col: number) {
    setDrawing(false);
    setSelection(false);
  }

  function onMouseEnter(row: number, col: number) {
    if (drawType !== 1 || !drawing) return;
    terrain[row][col] = currentBrush;
    setTerrain(terrain.concat([]));
  }

  function onMouseMove() {
    // console.log(e);
    if (selection) {
      let e: any = window.event;
      // console.log(e.pageX);
      setBegin({
        left: beginPoint.x + "px",
        top: beginPoint.y + "px",
        height: e.pageY - beginPoint.y + "px",
        width: e.pageX - beginPoint.x + "px"
      });
    }
  }

  return (
    <div className="game-page">
      <div className="map-editor" onMouseMove={onMouseMove}>
        {terrain.map((row: number[], indexX: number) => (
          <div key={indexX} className="row">
            {row.map((col: number, indexY: number) => (
              <div
                key={indexY}
                className="col"
                style={{ backgroundColor: TERRAIN_TYPE[col].color }}
                onClick={e => update(indexX, indexY)}
                onMouseEnter={e => onMouseEnter(indexX, indexY)}
                onMouseDown={e => onMouseDown(indexX, indexY)}
                onMouseUp={e => onMouseUp(indexX, indexY)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="game-brush">
        {TERRAIN_TYPE.map((type: any, index: number) => (
          <div
            className={`game-brush-item ${
              index === currentBrush ? "active" : ""
            }`}
            key={index}
            onClick={e =>
              setCurrentBrush(currentBrush === index ? null : index)
            }>
            <span style={{ backgroundColor: type.color }} />
            {type.name}
          </div>
        ))}
      </div>
      <div className="game-draw-type">
        {DRAW_TYPE.map((item: any, index: number) => (
          <div
            className={`game-draw-type-item ${
              drawType === index ? "active" : ""
            }`}
            onClick={e => setDrawType(index)}
            key={index}>
            {item.name}
          </div>
        ))}
      </div>
      {selection && <div className="game-draw-area" style={begin} />}
    </div>
  );
};

export default Game;
