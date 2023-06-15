/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlWidgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#description SqlWidget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#id SqlWidget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#text SqlWidget#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#title SqlWidget#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}
  */
  readonly visualizationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#widget_id SqlWidget#widget_id}
  */
  readonly widgetId?: string;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#parameter SqlWidget#parameter}
  */
  readonly parameter?: SqlWidgetParameter[] | cdktf.IResolvable;
  /**
  * position block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#position SqlWidget#position}
  */
  readonly position?: SqlWidgetPosition;
}
export interface SqlWidgetParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#map_to SqlWidget#map_to}
  */
  readonly mapTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#name SqlWidget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#title SqlWidget#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#type SqlWidget#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#value SqlWidget#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#values SqlWidget#values}
  */
  readonly values?: string[];
}

export function sqlWidgetParameterToTerraform(struct?: SqlWidgetParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_to: cdktf.stringToTerraform(struct!.mapTo),
    name: cdktf.stringToTerraform(struct!.name),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class SqlWidgetParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SqlWidgetParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTo = this._mapTo;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlWidgetParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapTo = undefined;
      this._name = undefined;
      this._title = undefined;
      this._type = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapTo = value.mapTo;
      this._name = value.name;
      this._title = value.title;
      this._type = value.type;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // map_to - computed: false, optional: true, required: false
  private _mapTo?: string; 
  public get mapTo() {
    return this.getStringAttribute('map_to');
  }
  public set mapTo(value: string) {
    this._mapTo = value;
  }
  public resetMapTo() {
    this._mapTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapToInput() {
    return this._mapTo;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SqlWidgetParameterList extends cdktf.ComplexList {
  public internalValue? : SqlWidgetParameter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SqlWidgetParameterOutputReference {
    return new SqlWidgetParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlWidgetPosition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#auto_height SqlWidget#auto_height}
  */
  readonly autoHeight?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#pos_x SqlWidget#pos_x}
  */
  readonly posX?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#pos_y SqlWidget#pos_y}
  */
  readonly posY?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#size_x SqlWidget#size_x}
  */
  readonly sizeX: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget#size_y SqlWidget#size_y}
  */
  readonly sizeY: number;
}

export function sqlWidgetPositionToTerraform(struct?: SqlWidgetPositionOutputReference | SqlWidgetPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_height: cdktf.booleanToTerraform(struct!.autoHeight),
    pos_x: cdktf.numberToTerraform(struct!.posX),
    pos_y: cdktf.numberToTerraform(struct!.posY),
    size_x: cdktf.numberToTerraform(struct!.sizeX),
    size_y: cdktf.numberToTerraform(struct!.sizeY),
  }
}

export class SqlWidgetPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlWidgetPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHeight = this._autoHeight;
    }
    if (this._posX !== undefined) {
      hasAnyValues = true;
      internalValueResult.posX = this._posX;
    }
    if (this._posY !== undefined) {
      hasAnyValues = true;
      internalValueResult.posY = this._posY;
    }
    if (this._sizeX !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeX = this._sizeX;
    }
    if (this._sizeY !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeY = this._sizeY;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlWidgetPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHeight = undefined;
      this._posX = undefined;
      this._posY = undefined;
      this._sizeX = undefined;
      this._sizeY = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHeight = value.autoHeight;
      this._posX = value.posX;
      this._posY = value.posY;
      this._sizeX = value.sizeX;
      this._sizeY = value.sizeY;
    }
  }

  // auto_height - computed: false, optional: true, required: false
  private _autoHeight?: boolean | cdktf.IResolvable; 
  public get autoHeight() {
    return this.getBooleanAttribute('auto_height');
  }
  public set autoHeight(value: boolean | cdktf.IResolvable) {
    this._autoHeight = value;
  }
  public resetAutoHeight() {
    this._autoHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHeightInput() {
    return this._autoHeight;
  }

  // pos_x - computed: false, optional: true, required: false
  private _posX?: number; 
  public get posX() {
    return this.getNumberAttribute('pos_x');
  }
  public set posX(value: number) {
    this._posX = value;
  }
  public resetPosX() {
    this._posX = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posXInput() {
    return this._posX;
  }

  // pos_y - computed: false, optional: true, required: false
  private _posY?: number; 
  public get posY() {
    return this.getNumberAttribute('pos_y');
  }
  public set posY(value: number) {
    this._posY = value;
  }
  public resetPosY() {
    this._posY = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posYInput() {
    return this._posY;
  }

  // size_x - computed: false, optional: false, required: true
  private _sizeX?: number; 
  public get sizeX() {
    return this.getNumberAttribute('size_x');
  }
  public set sizeX(value: number) {
    this._sizeX = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeXInput() {
    return this._sizeX;
  }

  // size_y - computed: false, optional: false, required: true
  private _sizeY?: number; 
  public get sizeY() {
    return this.getNumberAttribute('size_y');
  }
  public set sizeY(value: number) {
    this._sizeY = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeYInput() {
    return this._sizeY;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget databricks_sql_widget}
*/
export class SqlWidget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_widget";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.19.0/docs/resources/sql_widget databricks_sql_widget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlWidgetConfig
  */
  public constructor(scope: Construct, id: string, config: SqlWidgetConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_widget',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.19.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dashboardId = config.dashboardId;
    this._description = config.description;
    this._id = config.id;
    this._text = config.text;
    this._title = config.title;
    this._visualizationId = config.visualizationId;
    this._widgetId = config.widgetId;
    this._parameter.internalValue = config.parameter;
    this._position.internalValue = config.position;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visualization_id - computed: false, optional: true, required: false
  private _visualizationId?: string; 
  public get visualizationId() {
    return this.getStringAttribute('visualization_id');
  }
  public set visualizationId(value: string) {
    this._visualizationId = value;
  }
  public resetVisualizationId() {
    this._visualizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationIdInput() {
    return this._visualizationId;
  }

  // widget_id - computed: true, optional: true, required: false
  private _widgetId?: string; 
  public get widgetId() {
    return this.getStringAttribute('widget_id');
  }
  public set widgetId(value: string) {
    this._widgetId = value;
  }
  public resetWidgetId() {
    this._widgetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetIdInput() {
    return this._widgetId;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new SqlWidgetParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: SqlWidgetParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }

  // position - computed: false, optional: true, required: false
  private _position = new SqlWidgetPositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: SqlWidgetPosition) {
    this._position.internalValue = value;
  }
  public resetPosition() {
    this._position.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_id: cdktf.stringToTerraform(this._dashboardId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      text: cdktf.stringToTerraform(this._text),
      title: cdktf.stringToTerraform(this._title),
      visualization_id: cdktf.stringToTerraform(this._visualizationId),
      widget_id: cdktf.stringToTerraform(this._widgetId),
      parameter: cdktf.listMapper(sqlWidgetParameterToTerraform, true)(this._parameter.internalValue),
      position: sqlWidgetPositionToTerraform(this._position.internalValue),
    };
  }
}
