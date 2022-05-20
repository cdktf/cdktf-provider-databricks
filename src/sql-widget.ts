// https://www.terraform.io/docs/providers/databricks/r/sql_widget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlWidgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#dashboard_id SqlWidget#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#description SqlWidget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#text SqlWidget#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#title SqlWidget#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#visualization_id SqlWidget#visualization_id}
  */
  readonly visualizationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#widget_id SqlWidget#widget_id}
  */
  readonly widgetId?: string;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#parameter SqlWidget#parameter}
  */
  readonly parameter?: SqlWidgetParameter[] | cdktf.IResolvable;
  /**
  * position block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#position SqlWidget#position}
  */
  readonly position?: SqlWidgetPosition;
}
export interface SqlWidgetParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#map_to SqlWidget#map_to}
  */
  readonly mapTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#name SqlWidget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#title SqlWidget#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#type SqlWidget#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#value SqlWidget#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#values SqlWidget#values}
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
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SqlWidgetPosition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#auto_height SqlWidget#auto_height}
  */
  readonly autoHeight?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#pos_x SqlWidget#pos_x}
  */
  readonly posX?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#pos_y SqlWidget#pos_y}
  */
  readonly posY?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#size_x SqlWidget#size_x}
  */
  readonly sizeX: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget#size_y SqlWidget#size_y}
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
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget databricks_sql_widget}
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
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/sql_widget databricks_sql_widget} Resource
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
        providerVersion: '0.5.8',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dashboardId = config.dashboardId;
    this._description = config.description;
    this._text = config.text;
    this._title = config.title;
    this._visualizationId = config.visualizationId;
    this._widgetId = config.widgetId;
    this._parameter = config.parameter;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _parameter?: SqlWidgetParameter[] | cdktf.IResolvable; 
  public get parameter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('parameter')));
  }
  public set parameter(value: SqlWidgetParameter[] | cdktf.IResolvable) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
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
      text: cdktf.stringToTerraform(this._text),
      title: cdktf.stringToTerraform(this._title),
      visualization_id: cdktf.stringToTerraform(this._visualizationId),
      widget_id: cdktf.stringToTerraform(this._widgetId),
      parameter: cdktf.listMapper(sqlWidgetParameterToTerraform)(this._parameter),
      position: sqlWidgetPositionToTerraform(this._position.internalValue),
    };
  }
}
