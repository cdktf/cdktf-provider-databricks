# `lakehouseMonitor` Submodule <a name="`lakehouseMonitor` Submodule" id="@cdktf/provider-databricks.lakehouseMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakehouseMonitor <a name="LakehouseMonitor" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor databricks_lakehouse_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

new lakehouseMonitor.LakehouseMonitor(scope: Construct, id: string, config: LakehouseMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig">LakehouseMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig">LakehouseMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putCustomMetrics">putCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putDataClassificationConfig">putDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog">putInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications">putNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSnapshot">putSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries">putTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetBaselineTableName">resetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetCustomMetrics">resetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetDataClassificationConfig">resetDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetInferenceLog">resetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetLatestMonitorFailureMsg">resetLatestMonitorFailureMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetNotifications">resetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSkipBuiltinDashboard">resetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSlicingExprs">resetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSnapshot">resetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeSeries">resetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomMetrics` <a name="putCustomMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putCustomMetrics"></a>

```typescript
public putCustomMetrics(value: IResolvable | LakehouseMonitorCustomMetrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putCustomMetrics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>[]

---

##### `putDataClassificationConfig` <a name="putDataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putDataClassificationConfig"></a>

```typescript
public putDataClassificationConfig(value: LakehouseMonitorDataClassificationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putDataClassificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

---

##### `putInferenceLog` <a name="putInferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog"></a>

```typescript
public putInferenceLog(value: LakehouseMonitorInferenceLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

---

##### `putNotifications` <a name="putNotifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications"></a>

```typescript
public putNotifications(value: LakehouseMonitorNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule"></a>

```typescript
public putSchedule(value: LakehouseMonitorSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

---

##### `putSnapshot` <a name="putSnapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSnapshot"></a>

```typescript
public putSnapshot(value: LakehouseMonitorSnapshot): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeouts"></a>

```typescript
public putTimeouts(value: LakehouseMonitorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

---

##### `putTimeSeries` <a name="putTimeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries"></a>

```typescript
public putTimeSeries(value: LakehouseMonitorTimeSeries): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

---

##### `resetBaselineTableName` <a name="resetBaselineTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetBaselineTableName"></a>

```typescript
public resetBaselineTableName(): void
```

##### `resetCustomMetrics` <a name="resetCustomMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetCustomMetrics"></a>

```typescript
public resetCustomMetrics(): void
```

##### `resetDataClassificationConfig` <a name="resetDataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetDataClassificationConfig"></a>

```typescript
public resetDataClassificationConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInferenceLog` <a name="resetInferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetInferenceLog"></a>

```typescript
public resetInferenceLog(): void
```

##### `resetLatestMonitorFailureMsg` <a name="resetLatestMonitorFailureMsg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetLatestMonitorFailureMsg"></a>

```typescript
public resetLatestMonitorFailureMsg(): void
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetNotifications"></a>

```typescript
public resetNotifications(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetSkipBuiltinDashboard` <a name="resetSkipBuiltinDashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSkipBuiltinDashboard"></a>

```typescript
public resetSkipBuiltinDashboard(): void
```

##### `resetSlicingExprs` <a name="resetSlicingExprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSlicingExprs"></a>

```typescript
public resetSlicingExprs(): void
```

##### `resetSnapshot` <a name="resetSnapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSnapshot"></a>

```typescript
public resetSnapshot(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeSeries` <a name="resetTimeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeSeries"></a>

```typescript
public resetTimeSeries(): void
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetWarehouseId"></a>

```typescript
public resetWarehouseId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LakehouseMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isConstruct"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

lakehouseMonitor.LakehouseMonitor.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformElement"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

lakehouseMonitor.LakehouseMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformResource"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

lakehouseMonitor.LakehouseMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

lakehouseMonitor.LakehouseMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LakehouseMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakehouseMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakehouseMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakehouseMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetrics">customMetrics</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList">LakehouseMonitorCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dashboardId">dashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfig">dataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference">LakehouseMonitorDataClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.driftMetricsTableName">driftMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference">LakehouseMonitorInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.monitorVersion">monitorVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference">LakehouseMonitorNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.profileMetricsTableName">profileMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference">LakehouseMonitorScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference">LakehouseMonitorSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference">LakehouseMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference">LakehouseMonitorTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDirInput">assetsDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableNameInput">baselineTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetricsInput">customMetricsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfigInput">dataClassificationConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLogInput">inferenceLogInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsgInput">latestMonitorFailureMsgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notificationsInput">notificationsInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaNameInput">outputSchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboardInput">skipBuiltinDashboardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprsInput">slicingExprsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshotInput">snapshotInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeriesInput">timeSeriesInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseIdInput">warehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDir">assetsDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableName">baselineTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsg">latestMonitorFailureMsg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaName">outputSchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprs">slicingExprs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customMetrics`<sup>Required</sup> <a name="customMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetrics"></a>

```typescript
public readonly customMetrics: LakehouseMonitorCustomMetricsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList">LakehouseMonitorCustomMetricsList</a>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

---

##### `dataClassificationConfig`<sup>Required</sup> <a name="dataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfig"></a>

```typescript
public readonly dataClassificationConfig: LakehouseMonitorDataClassificationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference">LakehouseMonitorDataClassificationConfigOutputReference</a>

---

##### `driftMetricsTableName`<sup>Required</sup> <a name="driftMetricsTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.driftMetricsTableName"></a>

```typescript
public readonly driftMetricsTableName: string;
```

- *Type:* string

---

##### `inferenceLog`<sup>Required</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLog"></a>

```typescript
public readonly inferenceLog: LakehouseMonitorInferenceLogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference">LakehouseMonitorInferenceLogOutputReference</a>

---

##### `monitorVersion`<sup>Required</sup> <a name="monitorVersion" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.monitorVersion"></a>

```typescript
public readonly monitorVersion: number;
```

- *Type:* number

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notifications"></a>

```typescript
public readonly notifications: LakehouseMonitorNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference">LakehouseMonitorNotificationsOutputReference</a>

---

##### `profileMetricsTableName`<sup>Required</sup> <a name="profileMetricsTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.profileMetricsTableName"></a>

```typescript
public readonly profileMetricsTableName: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.schedule"></a>

```typescript
public readonly schedule: LakehouseMonitorScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference">LakehouseMonitorScheduleOutputReference</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshot"></a>

```typescript
public readonly snapshot: LakehouseMonitorSnapshotOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference">LakehouseMonitorSnapshotOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeouts"></a>

```typescript
public readonly timeouts: LakehouseMonitorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference">LakehouseMonitorTimeoutsOutputReference</a>

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeries"></a>

```typescript
public readonly timeSeries: LakehouseMonitorTimeSeriesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference">LakehouseMonitorTimeSeriesOutputReference</a>

---

##### `assetsDirInput`<sup>Optional</sup> <a name="assetsDirInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDirInput"></a>

```typescript
public readonly assetsDirInput: string;
```

- *Type:* string

---

##### `baselineTableNameInput`<sup>Optional</sup> <a name="baselineTableNameInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableNameInput"></a>

```typescript
public readonly baselineTableNameInput: string;
```

- *Type:* string

---

##### `customMetricsInput`<sup>Optional</sup> <a name="customMetricsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetricsInput"></a>

```typescript
public readonly customMetricsInput: IResolvable | LakehouseMonitorCustomMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>[]

---

##### `dataClassificationConfigInput`<sup>Optional</sup> <a name="dataClassificationConfigInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfigInput"></a>

```typescript
public readonly dataClassificationConfigInput: LakehouseMonitorDataClassificationConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inferenceLogInput`<sup>Optional</sup> <a name="inferenceLogInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLogInput"></a>

```typescript
public readonly inferenceLogInput: LakehouseMonitorInferenceLog;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

---

##### `latestMonitorFailureMsgInput`<sup>Optional</sup> <a name="latestMonitorFailureMsgInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsgInput"></a>

```typescript
public readonly latestMonitorFailureMsgInput: string;
```

- *Type:* string

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notificationsInput"></a>

```typescript
public readonly notificationsInput: LakehouseMonitorNotifications;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

---

##### `outputSchemaNameInput`<sup>Optional</sup> <a name="outputSchemaNameInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaNameInput"></a>

```typescript
public readonly outputSchemaNameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: LakehouseMonitorSchedule;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

---

##### `skipBuiltinDashboardInput`<sup>Optional</sup> <a name="skipBuiltinDashboardInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboardInput"></a>

```typescript
public readonly skipBuiltinDashboardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `slicingExprsInput`<sup>Optional</sup> <a name="slicingExprsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprsInput"></a>

```typescript
public readonly slicingExprsInput: string[];
```

- *Type:* string[]

---

##### `snapshotInput`<sup>Optional</sup> <a name="snapshotInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshotInput"></a>

```typescript
public readonly snapshotInput: LakehouseMonitorSnapshot;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LakehouseMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

---

##### `timeSeriesInput`<sup>Optional</sup> <a name="timeSeriesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeriesInput"></a>

```typescript
public readonly timeSeriesInput: LakehouseMonitorTimeSeries;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseIdInput"></a>

```typescript
public readonly warehouseIdInput: string;
```

- *Type:* string

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDir"></a>

```typescript
public readonly assetsDir: string;
```

- *Type:* string

---

##### `baselineTableName`<sup>Required</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableName"></a>

```typescript
public readonly baselineTableName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `latestMonitorFailureMsg`<sup>Required</sup> <a name="latestMonitorFailureMsg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsg"></a>

```typescript
public readonly latestMonitorFailureMsg: string;
```

- *Type:* string

---

##### `outputSchemaName`<sup>Required</sup> <a name="outputSchemaName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaName"></a>

```typescript
public readonly outputSchemaName: string;
```

- *Type:* string

---

##### `skipBuiltinDashboard`<sup>Required</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboard"></a>

```typescript
public readonly skipBuiltinDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `slicingExprs`<sup>Required</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprs"></a>

```typescript
public readonly slicingExprs: string[];
```

- *Type:* string[]

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakehouseMonitorConfig <a name="LakehouseMonitorConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

const lakehouseMonitorConfig: lakehouseMonitor.LakehouseMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.assetsDir">assetsDir</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.outputSchemaName">outputSchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.baselineTableName">baselineTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.customMetrics">customMetrics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>[]</code> | custom_metrics block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dataClassificationConfig">dataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | data_classification_config block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | inference_log block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.latestMonitorFailureMsg">latestMonitorFailureMsg</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.slicingExprs">slicingExprs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | snapshot block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | time_series block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.warehouseId">warehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.assetsDir"></a>

```typescript
public readonly assetsDir: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}.

---

##### `outputSchemaName`<sup>Required</sup> <a name="outputSchemaName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.outputSchemaName"></a>

```typescript
public readonly outputSchemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}.

---

##### `baselineTableName`<sup>Optional</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.baselineTableName"></a>

```typescript
public readonly baselineTableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}.

---

##### `customMetrics`<sup>Optional</sup> <a name="customMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.customMetrics"></a>

```typescript
public readonly customMetrics: IResolvable | LakehouseMonitorCustomMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>[]

custom_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#custom_metrics LakehouseMonitor#custom_metrics}

---

##### `dataClassificationConfig`<sup>Optional</sup> <a name="dataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dataClassificationConfig"></a>

```typescript
public readonly dataClassificationConfig: LakehouseMonitorDataClassificationConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

data_classification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#data_classification_config LakehouseMonitor#data_classification_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inferenceLog`<sup>Optional</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.inferenceLog"></a>

```typescript
public readonly inferenceLog: LakehouseMonitorInferenceLog;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

inference_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#inference_log LakehouseMonitor#inference_log}

---

##### `latestMonitorFailureMsg`<sup>Optional</sup> <a name="latestMonitorFailureMsg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.latestMonitorFailureMsg"></a>

```typescript
public readonly latestMonitorFailureMsg: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.notifications"></a>

```typescript
public readonly notifications: LakehouseMonitorNotifications;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#notifications LakehouseMonitor#notifications}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.schedule"></a>

```typescript
public readonly schedule: LakehouseMonitorSchedule;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#schedule LakehouseMonitor#schedule}

---

##### `skipBuiltinDashboard`<sup>Optional</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.skipBuiltinDashboard"></a>

```typescript
public readonly skipBuiltinDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}.

---

##### `slicingExprs`<sup>Optional</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.slicingExprs"></a>

```typescript
public readonly slicingExprs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.snapshot"></a>

```typescript
public readonly snapshot: LakehouseMonitorSnapshot;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

snapshot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#snapshot LakehouseMonitor#snapshot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LakehouseMonitorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#timeouts LakehouseMonitor#timeouts}

---

##### `timeSeries`<sup>Optional</sup> <a name="timeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeSeries"></a>

```typescript
public readonly timeSeries: LakehouseMonitorTimeSeries;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

time_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#time_series LakehouseMonitor#time_series}

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}.

---

### LakehouseMonitorCustomMetrics <a name="LakehouseMonitorCustomMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

const lakehouseMonitorCustomMetrics: lakehouseMonitor.LakehouseMonitorCustomMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.definition">definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#definition LakehouseMonitor#definition}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.inputColumns">inputColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#input_columns LakehouseMonitor#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#name LakehouseMonitor#name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.outputDataType">outputDataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#output_data_type LakehouseMonitor#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#type LakehouseMonitor#type}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#definition LakehouseMonitor#definition}.

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.inputColumns"></a>

```typescript
public readonly inputColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#input_columns LakehouseMonitor#input_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#name LakehouseMonitor#name}.

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.outputDataType"></a>

```typescript
public readonly outputDataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#output_data_type LakehouseMonitor#output_data_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#type LakehouseMonitor#type}.

---

### LakehouseMonitorDataClassificationConfig <a name="LakehouseMonitorDataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

const lakehouseMonitorDataClassificationConfig: lakehouseMonitor.LakehouseMonitorDataClassificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#enabled LakehouseMonitor#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#enabled LakehouseMonitor#enabled}.

---

### LakehouseMonitorInferenceLog <a name="LakehouseMonitorInferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

const lakehouseMonitorInferenceLog: lakehouseMonitor.LakehouseMonitorInferenceLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.granularities">granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.modelIdCol">modelIdCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#model_id_col LakehouseMonitor#model_id_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionCol">predictionCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#prediction_col LakehouseMonitor#prediction_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.problemType">problemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#problem_type LakehouseMonitor#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.timestampCol">timestampCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.labelCol">labelCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#label_col LakehouseMonitor#label_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionProbaCol">predictionProbaCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#prediction_proba_col LakehouseMonitor#prediction_proba_col}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.granularities"></a>

```typescript
public readonly granularities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}.

---

##### `modelIdCol`<sup>Required</sup> <a name="modelIdCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.modelIdCol"></a>

```typescript
public readonly modelIdCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#model_id_col LakehouseMonitor#model_id_col}.

---

##### `predictionCol`<sup>Required</sup> <a name="predictionCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionCol"></a>

```typescript
public readonly predictionCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#prediction_col LakehouseMonitor#prediction_col}.

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.problemType"></a>

```typescript
public readonly problemType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#problem_type LakehouseMonitor#problem_type}.

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.timestampCol"></a>

```typescript
public readonly timestampCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}.

---

##### `labelCol`<sup>Optional</sup> <a name="labelCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.labelCol"></a>

```typescript
public readonly labelCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#label_col LakehouseMonitor#label_col}.

---

##### `predictionProbaCol`<sup>Optional</sup> <a name="predictionProbaCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionProbaCol"></a>

```typescript
public readonly predictionProbaCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#prediction_proba_col LakehouseMonitor#prediction_proba_col}.

---

### LakehouseMonitorNotifications <a name="LakehouseMonitorNotifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

const lakehouseMonitorNotifications: lakehouseMonitor.LakehouseMonitorNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onNewClassificationTagDetected">onNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a></code> | on_new_classification_tag_detected block. |

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onFailure"></a>

```typescript
public readonly onFailure: LakehouseMonitorNotificationsOnFailure;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#on_failure LakehouseMonitor#on_failure}

---

##### `onNewClassificationTagDetected`<sup>Optional</sup> <a name="onNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onNewClassificationTagDetected"></a>

```typescript
public readonly onNewClassificationTagDetected: LakehouseMonitorNotificationsOnNewClassificationTagDetected;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

on_new_classification_tag_detected block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#on_new_classification_tag_detected LakehouseMonitor#on_new_classification_tag_detected}

---

### LakehouseMonitorNotificationsOnFailure <a name="LakehouseMonitorNotificationsOnFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

const lakehouseMonitorNotificationsOnFailure: lakehouseMonitor.LakehouseMonitorNotificationsOnFailure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}. |

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}.

---

### LakehouseMonitorNotificationsOnNewClassificationTagDetected <a name="LakehouseMonitorNotificationsOnNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

const lakehouseMonitorNotificationsOnNewClassificationTagDetected: lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}. |

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}.

---

### LakehouseMonitorSchedule <a name="LakehouseMonitorSchedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

const lakehouseMonitorSchedule: lakehouseMonitor.LakehouseMonitorSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.quartzCronExpression">quartzCronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#quartz_cron_expression LakehouseMonitor#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.timezoneId">timezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#timezone_id LakehouseMonitor#timezone_id}. |

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.quartzCronExpression"></a>

```typescript
public readonly quartzCronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#quartz_cron_expression LakehouseMonitor#quartz_cron_expression}.

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#timezone_id LakehouseMonitor#timezone_id}.

---

### LakehouseMonitorSnapshot <a name="LakehouseMonitorSnapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

const lakehouseMonitorSnapshot: lakehouseMonitor.LakehouseMonitorSnapshot = { ... }
```


### LakehouseMonitorTimeouts <a name="LakehouseMonitorTimeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

const lakehouseMonitorTimeouts: lakehouseMonitor.LakehouseMonitorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#create LakehouseMonitor#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#create LakehouseMonitor#create}.

---

### LakehouseMonitorTimeSeries <a name="LakehouseMonitorTimeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

const lakehouseMonitorTimeSeries: lakehouseMonitor.LakehouseMonitorTimeSeries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.granularities">granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.timestampCol">timestampCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.granularities"></a>

```typescript
public readonly granularities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}.

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.timestampCol"></a>

```typescript
public readonly timestampCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakehouseMonitorCustomMetricsList <a name="LakehouseMonitorCustomMetricsList" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

new lakehouseMonitor.LakehouseMonitorCustomMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.get"></a>

```typescript
public get(index: number): LakehouseMonitorCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakehouseMonitorCustomMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>[]

---


### LakehouseMonitorCustomMetricsOutputReference <a name="LakehouseMonitorCustomMetricsOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

new lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definitionInput">definitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumnsInput">inputColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataTypeInput">outputDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumns">inputColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataType">outputDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definitionInput"></a>

```typescript
public readonly definitionInput: string;
```

- *Type:* string

---

##### `inputColumnsInput`<sup>Optional</sup> <a name="inputColumnsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumnsInput"></a>

```typescript
public readonly inputColumnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputDataTypeInput`<sup>Optional</sup> <a name="outputDataTypeInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```typescript
public readonly outputDataTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumns"></a>

```typescript
public readonly inputColumns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataType"></a>

```typescript
public readonly outputDataType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakehouseMonitorCustomMetrics;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>

---


### LakehouseMonitorDataClassificationConfigOutputReference <a name="LakehouseMonitorDataClassificationConfigOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

new lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakehouseMonitorDataClassificationConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

---


### LakehouseMonitorInferenceLogOutputReference <a name="LakehouseMonitorInferenceLogOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

new lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetLabelCol">resetLabelCol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetPredictionProbaCol">resetPredictionProbaCol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabelCol` <a name="resetLabelCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetLabelCol"></a>

```typescript
public resetLabelCol(): void
```

##### `resetPredictionProbaCol` <a name="resetPredictionProbaCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetPredictionProbaCol"></a>

```typescript
public resetPredictionProbaCol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelColInput">labelColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdColInput">modelIdColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionColInput">predictionColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaColInput">predictionProbaColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemTypeInput">problemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampColInput">timestampColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularities">granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelCol">labelCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdCol">modelIdCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionCol">predictionCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaCol">predictionProbaCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemType">problemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampCol">timestampCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularitiesInput"></a>

```typescript
public readonly granularitiesInput: string[];
```

- *Type:* string[]

---

##### `labelColInput`<sup>Optional</sup> <a name="labelColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelColInput"></a>

```typescript
public readonly labelColInput: string;
```

- *Type:* string

---

##### `modelIdColInput`<sup>Optional</sup> <a name="modelIdColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdColInput"></a>

```typescript
public readonly modelIdColInput: string;
```

- *Type:* string

---

##### `predictionColInput`<sup>Optional</sup> <a name="predictionColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionColInput"></a>

```typescript
public readonly predictionColInput: string;
```

- *Type:* string

---

##### `predictionProbaColInput`<sup>Optional</sup> <a name="predictionProbaColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaColInput"></a>

```typescript
public readonly predictionProbaColInput: string;
```

- *Type:* string

---

##### `problemTypeInput`<sup>Optional</sup> <a name="problemTypeInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemTypeInput"></a>

```typescript
public readonly problemTypeInput: string;
```

- *Type:* string

---

##### `timestampColInput`<sup>Optional</sup> <a name="timestampColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampColInput"></a>

```typescript
public readonly timestampColInput: string;
```

- *Type:* string

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularities"></a>

```typescript
public readonly granularities: string[];
```

- *Type:* string[]

---

##### `labelCol`<sup>Required</sup> <a name="labelCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelCol"></a>

```typescript
public readonly labelCol: string;
```

- *Type:* string

---

##### `modelIdCol`<sup>Required</sup> <a name="modelIdCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdCol"></a>

```typescript
public readonly modelIdCol: string;
```

- *Type:* string

---

##### `predictionCol`<sup>Required</sup> <a name="predictionCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionCol"></a>

```typescript
public readonly predictionCol: string;
```

- *Type:* string

---

##### `predictionProbaCol`<sup>Required</sup> <a name="predictionProbaCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaCol"></a>

```typescript
public readonly predictionProbaCol: string;
```

- *Type:* string

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemType"></a>

```typescript
public readonly problemType: string;
```

- *Type:* string

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampCol"></a>

```typescript
public readonly timestampCol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakehouseMonitorInferenceLog;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

---


### LakehouseMonitorNotificationsOnFailureOutputReference <a name="LakehouseMonitorNotificationsOnFailureOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

new lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakehouseMonitorNotificationsOnFailure;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

---


### LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference <a name="LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

new lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakehouseMonitorNotificationsOnNewClassificationTagDetected;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

---


### LakehouseMonitorNotificationsOutputReference <a name="LakehouseMonitorNotificationsOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

new lakehouseMonitor.LakehouseMonitorNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnNewClassificationTagDetected">putOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnNewClassificationTagDetected">resetOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailure` <a name="putOnFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnFailure"></a>

```typescript
public putOnFailure(value: LakehouseMonitorNotificationsOnFailure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

---

##### `putOnNewClassificationTagDetected` <a name="putOnNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnNewClassificationTagDetected"></a>

```typescript
public putOnNewClassificationTagDetected(value: LakehouseMonitorNotificationsOnNewClassificationTagDetected): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnNewClassificationTagDetected.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnFailure"></a>

```typescript
public resetOnFailure(): void
```

##### `resetOnNewClassificationTagDetected` <a name="resetOnNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnNewClassificationTagDetected"></a>

```typescript
public resetOnNewClassificationTagDetected(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference">LakehouseMonitorNotificationsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetected">onNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference">LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailureInput">onFailureInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetectedInput">onNewClassificationTagDetectedInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: LakehouseMonitorNotificationsOnFailureOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference">LakehouseMonitorNotificationsOnFailureOutputReference</a>

---

##### `onNewClassificationTagDetected`<sup>Required</sup> <a name="onNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetected"></a>

```typescript
public readonly onNewClassificationTagDetected: LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference">LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailureInput"></a>

```typescript
public readonly onFailureInput: LakehouseMonitorNotificationsOnFailure;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

---

##### `onNewClassificationTagDetectedInput`<sup>Optional</sup> <a name="onNewClassificationTagDetectedInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetectedInput"></a>

```typescript
public readonly onNewClassificationTagDetectedInput: LakehouseMonitorNotificationsOnNewClassificationTagDetected;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakehouseMonitorNotifications;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

---


### LakehouseMonitorScheduleOutputReference <a name="LakehouseMonitorScheduleOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

new lakehouseMonitor.LakehouseMonitorScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.pauseStatus">pauseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpressionInput">quartzCronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneIdInput">timezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpression">quartzCronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneId">timezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pauseStatus`<sup>Required</sup> <a name="pauseStatus" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.pauseStatus"></a>

```typescript
public readonly pauseStatus: string;
```

- *Type:* string

---

##### `quartzCronExpressionInput`<sup>Optional</sup> <a name="quartzCronExpressionInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpressionInput"></a>

```typescript
public readonly quartzCronExpressionInput: string;
```

- *Type:* string

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneIdInput"></a>

```typescript
public readonly timezoneIdInput: string;
```

- *Type:* string

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpression"></a>

```typescript
public readonly quartzCronExpression: string;
```

- *Type:* string

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakehouseMonitorSchedule;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

---


### LakehouseMonitorSnapshotOutputReference <a name="LakehouseMonitorSnapshotOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

new lakehouseMonitor.LakehouseMonitorSnapshotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakehouseMonitorSnapshot;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

---


### LakehouseMonitorTimeoutsOutputReference <a name="LakehouseMonitorTimeoutsOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

new lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakehouseMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

---


### LakehouseMonitorTimeSeriesOutputReference <a name="LakehouseMonitorTimeSeriesOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer"></a>

```typescript
import { lakehouseMonitor } from '@cdktf/provider-databricks'

new lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampColInput">timestampColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularities">granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampCol">timestampCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularitiesInput"></a>

```typescript
public readonly granularitiesInput: string[];
```

- *Type:* string[]

---

##### `timestampColInput`<sup>Optional</sup> <a name="timestampColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampColInput"></a>

```typescript
public readonly timestampColInput: string;
```

- *Type:* string

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularities"></a>

```typescript
public readonly granularities: string[];
```

- *Type:* string[]

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampCol"></a>

```typescript
public readonly timestampCol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakehouseMonitorTimeSeries;
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

---



