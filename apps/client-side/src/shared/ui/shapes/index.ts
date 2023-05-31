/* eslint-disable @typescript-eslint/ban-ts-comment */// @ts-nocheckimport event_indicator_svg from './Indicators/event.svg'import indic_indicator_svg from './Indicators/indicator.svg'import label_indicator_svg from './Indicators/label.svg'import meter_indicator_svg from './Indicators/meter.svg'import state_indicator_svg from './Indicators/state_intepreter.svg'import lb_pipeline_svg from './Pipelne/Pipeline_90_LeftBottom.svg'import lu_pipeline_svg from './Pipelne/Pipeline_90_LeftUp.svg'import rb_pipeline_svg from './Pipelne/Pipeline_90_RightBottom.svg'import ru_pipeline_svg from './Pipelne/Pipeline_90_RightUp.svg'import cross_pipeline_svg from './Pipelne/Pipeline_Cross.SVG'import horizontal_pipeline_svg from './Pipelne/Pipeline_horizontal.svg'import tlike_pipeline_svg from './Pipelne/pipeline_tlike.SVG'import vertical_pipeline_svg from './Pipelne/Pipeline_vertical.svg'import wLevel_pipeline_svg from './Pipelne/Pipeline_with_level.svg'import cns_pump_svg from './Pump/cns.SVG'import cool_pump_svg from './Pump/cool pump.SVG'import _cool_pump_svg from './Pump/cool_pump.SVG'import g_cool_pump_svg from './Pump/cool_pump_green.svg'import sub_pump_svg from './Pump/Submersible_pump.SVG'import vert_pump_svg from './Pump/vert_pump.SVG'import deflt_pump_svg from './Pump/кк.SVG'import circle_shape_svg from './Shape/circle.svg'import gas_shape_svg from './Shape/gas.svg'import line_shape_svg from './Shape/line.svg'import rect_shape_svg from './Shape/rect.svg'import deflt_tank_svg from './Tank/TankDoubleLevel.svg'export default [	{		label: 'Фигуры',		items: [			{ id: 1, image: circle_shape_svg, label: 'Круг' },			{ id: 2, image: gas_shape_svg, label: 'Газ' },			{ id: 3, image: line_shape_svg, label: 'Линия' },			{ id: 4, image: rect_shape_svg, label: 'Прямоугольник' }		]	},	{		label: 'Индикаторы',		items: [			{ id: 5, image: meter_indicator_svg, label: 'Датчик' },			{ id: 6, image: event_indicator_svg, label: 'Событие' },			{ id: 7, image: state_indicator_svg, label: 'Состояние' },			{ id: 8, image: indic_indicator_svg, label: 'Поле' },			{ id: 9, image: label_indicator_svg, label: 'Ярлык' }		]	},	{		label: 'Резервуары',		items: [{ id: 10, image: deflt_tank_svg, label: 'Базовый' }]	},	{		label: 'Насосы',		items: [			{ id: 11, image: deflt_pump_svg, label: 'Базовый' },			{ id: 12, image: sub_pump_svg, label: 'Суб' },			{ id: 13, image: vert_pump_svg, label: 'Вертикальный' },			{ id: 14, image: cns_pump_svg, label: 'ЦНС' },			{ id: 15, image: cool_pump_svg, label: '-' },			{ id: 16, image: _cool_pump_svg, label: '-' },			{ id: 17, image: g_cool_pump_svg, label: '-' }		]	},	{		label: 'Трубы',		items: [			{ id: 18, image: lb_pipeline_svg, label: '-' },			{ id: 19, image: lu_pipeline_svg, label: '-' },			{ id: 20, image: rb_pipeline_svg, label: '-' },			{ id: 21, image: ru_pipeline_svg, label: '-' },			{ id: 22, image: cross_pipeline_svg, label: '-' },			{ id: 23, image: horizontal_pipeline_svg, label: '-' },			{ id: 24, image: tlike_pipeline_svg, label: '-' },			{ id: 25, image: vertical_pipeline_svg, label: '-' },			{ id: 16, image: wLevel_pipeline_svg, label: '-' }		]	}]