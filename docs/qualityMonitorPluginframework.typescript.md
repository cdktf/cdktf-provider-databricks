# `qualityMonitorPluginframework` Submodule <a name="`qualityMonitorPluginframework` Submodule" id="@cdktf/provider-databricks.qualityMonitorPluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QualityMonitorPluginframework <a name="QualityMonitorPluginframework" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework databricks_quality_monitor_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

new qualityMonitorPluginframework.QualityMonitorPluginframework(scope: Construct, id: string, config: QualityMonitorPluginframeworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig">QualityMonitorPluginframeworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig">QualityMonitorPluginframeworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putCustomMetrics">putCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putDataClassificationConfig">putDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog">putInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications">putNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSnapshot">putSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries">putTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetBaselineTableName">resetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetCustomMetrics">resetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetDataClassificationConfig">resetDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetInferenceLog">resetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetLatestMonitorFailureMsg">resetLatestMonitorFailureMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetNotifications">resetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSkipBuiltinDashboard">resetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSlicingExprs">resetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSnapshot">resetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetTimeSeries">resetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomMetrics` <a name="putCustomMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putCustomMetrics"></a>

```typescript
public putCustomMetrics(value: IResolvable | QualityMonitorPluginframeworkCustomMetrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putCustomMetrics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>[]

---

##### `putDataClassificationConfig` <a name="putDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putDataClassificationConfig"></a>

```typescript
public putDataClassificationConfig(value: QualityMonitorPluginframeworkDataClassificationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putDataClassificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

---

##### `putInferenceLog` <a name="putInferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog"></a>

```typescript
public putInferenceLog(value: QualityMonitorPluginframeworkInferenceLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

---

##### `putNotifications` <a name="putNotifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications"></a>

```typescript
public putNotifications(value: QualityMonitorPluginframeworkNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule"></a>

```typescript
public putSchedule(value: QualityMonitorPluginframeworkSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>

---

##### `putSnapshot` <a name="putSnapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSnapshot"></a>

```typescript
public putSnapshot(value: QualityMonitorPluginframeworkSnapshot): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

---

##### `putTimeSeries` <a name="putTimeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries"></a>

```typescript
public putTimeSeries(value: QualityMonitorPluginframeworkTimeSeries): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

---

##### `resetBaselineTableName` <a name="resetBaselineTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetBaselineTableName"></a>

```typescript
public resetBaselineTableName(): void
```

##### `resetCustomMetrics` <a name="resetCustomMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetCustomMetrics"></a>

```typescript
public resetCustomMetrics(): void
```

##### `resetDataClassificationConfig` <a name="resetDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetDataClassificationConfig"></a>

```typescript
public resetDataClassificationConfig(): void
```

##### `resetInferenceLog` <a name="resetInferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetInferenceLog"></a>

```typescript
public resetInferenceLog(): void
```

##### `resetLatestMonitorFailureMsg` <a name="resetLatestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetLatestMonitorFailureMsg"></a>

```typescript
public resetLatestMonitorFailureMsg(): void
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetNotifications"></a>

```typescript
public resetNotifications(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetSkipBuiltinDashboard` <a name="resetSkipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSkipBuiltinDashboard"></a>

```typescript
public resetSkipBuiltinDashboard(): void
```

##### `resetSlicingExprs` <a name="resetSlicingExprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSlicingExprs"></a>

```typescript
public resetSlicingExprs(): void
```

##### `resetSnapshot` <a name="resetSnapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSnapshot"></a>

```typescript
public resetSnapshot(): void
```

##### `resetTimeSeries` <a name="resetTimeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetTimeSeries"></a>

```typescript
public resetTimeSeries(): void
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetWarehouseId"></a>

```typescript
public resetWarehouseId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QualityMonitorPluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isConstruct"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

qualityMonitorPluginframework.QualityMonitorPluginframework.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a QualityMonitorPluginframework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QualityMonitorPluginframework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QualityMonitorPluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QualityMonitorPluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetrics">customMetrics</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList">QualityMonitorPluginframeworkCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dashboardId">dashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfig">dataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference">QualityMonitorPluginframeworkDataClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.driftMetricsTableName">driftMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference">QualityMonitorPluginframeworkInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.monitorVersion">monitorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference">QualityMonitorPluginframeworkNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.profileMetricsTableName">profileMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference">QualityMonitorPluginframeworkScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference">QualityMonitorPluginframeworkSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference">QualityMonitorPluginframeworkTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDirInput">assetsDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableNameInput">baselineTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetricsInput">customMetricsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfigInput">dataClassificationConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLogInput">inferenceLogInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsgInput">latestMonitorFailureMsgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notificationsInput">notificationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaNameInput">outputSchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.scheduleInput">scheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboardInput">skipBuiltinDashboardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprsInput">slicingExprsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshotInput">snapshotInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeriesInput">timeSeriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseIdInput">warehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDir">assetsDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableName">baselineTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsg">latestMonitorFailureMsg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaName">outputSchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprs">slicingExprs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customMetrics`<sup>Required</sup> <a name="customMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetrics"></a>

```typescript
public readonly customMetrics: QualityMonitorPluginframeworkCustomMetricsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList">QualityMonitorPluginframeworkCustomMetricsList</a>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

---

##### `dataClassificationConfig`<sup>Required</sup> <a name="dataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfig"></a>

```typescript
public readonly dataClassificationConfig: QualityMonitorPluginframeworkDataClassificationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference">QualityMonitorPluginframeworkDataClassificationConfigOutputReference</a>

---

##### `driftMetricsTableName`<sup>Required</sup> <a name="driftMetricsTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.driftMetricsTableName"></a>

```typescript
public readonly driftMetricsTableName: string;
```

- *Type:* string

---

##### `inferenceLog`<sup>Required</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLog"></a>

```typescript
public readonly inferenceLog: QualityMonitorPluginframeworkInferenceLogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference">QualityMonitorPluginframeworkInferenceLogOutputReference</a>

---

##### `monitorVersion`<sup>Required</sup> <a name="monitorVersion" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.monitorVersion"></a>

```typescript
public readonly monitorVersion: string;
```

- *Type:* string

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notifications"></a>

```typescript
public readonly notifications: QualityMonitorPluginframeworkNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference">QualityMonitorPluginframeworkNotificationsOutputReference</a>

---

##### `profileMetricsTableName`<sup>Required</sup> <a name="profileMetricsTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.profileMetricsTableName"></a>

```typescript
public readonly profileMetricsTableName: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.schedule"></a>

```typescript
public readonly schedule: QualityMonitorPluginframeworkScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference">QualityMonitorPluginframeworkScheduleOutputReference</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshot"></a>

```typescript
public readonly snapshot: QualityMonitorPluginframeworkSnapshotOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference">QualityMonitorPluginframeworkSnapshotOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeries"></a>

```typescript
public readonly timeSeries: QualityMonitorPluginframeworkTimeSeriesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference">QualityMonitorPluginframeworkTimeSeriesOutputReference</a>

---

##### `assetsDirInput`<sup>Optional</sup> <a name="assetsDirInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDirInput"></a>

```typescript
public readonly assetsDirInput: string;
```

- *Type:* string

---

##### `baselineTableNameInput`<sup>Optional</sup> <a name="baselineTableNameInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableNameInput"></a>

```typescript
public readonly baselineTableNameInput: string;
```

- *Type:* string

---

##### `customMetricsInput`<sup>Optional</sup> <a name="customMetricsInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetricsInput"></a>

```typescript
public readonly customMetricsInput: IResolvable | QualityMonitorPluginframeworkCustomMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>[]

---

##### `dataClassificationConfigInput`<sup>Optional</sup> <a name="dataClassificationConfigInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfigInput"></a>

```typescript
public readonly dataClassificationConfigInput: IResolvable | QualityMonitorPluginframeworkDataClassificationConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

---

##### `inferenceLogInput`<sup>Optional</sup> <a name="inferenceLogInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLogInput"></a>

```typescript
public readonly inferenceLogInput: IResolvable | QualityMonitorPluginframeworkInferenceLog;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

---

##### `latestMonitorFailureMsgInput`<sup>Optional</sup> <a name="latestMonitorFailureMsgInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsgInput"></a>

```typescript
public readonly latestMonitorFailureMsgInput: string;
```

- *Type:* string

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notificationsInput"></a>

```typescript
public readonly notificationsInput: IResolvable | QualityMonitorPluginframeworkNotifications;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>

---

##### `outputSchemaNameInput`<sup>Optional</sup> <a name="outputSchemaNameInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaNameInput"></a>

```typescript
public readonly outputSchemaNameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | QualityMonitorPluginframeworkSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>

---

##### `skipBuiltinDashboardInput`<sup>Optional</sup> <a name="skipBuiltinDashboardInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboardInput"></a>

```typescript
public readonly skipBuiltinDashboardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `slicingExprsInput`<sup>Optional</sup> <a name="slicingExprsInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprsInput"></a>

```typescript
public readonly slicingExprsInput: string[];
```

- *Type:* string[]

---

##### `snapshotInput`<sup>Optional</sup> <a name="snapshotInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshotInput"></a>

```typescript
public readonly snapshotInput: IResolvable | QualityMonitorPluginframeworkSnapshot;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `timeSeriesInput`<sup>Optional</sup> <a name="timeSeriesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeriesInput"></a>

```typescript
public readonly timeSeriesInput: IResolvable | QualityMonitorPluginframeworkTimeSeries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseIdInput"></a>

```typescript
public readonly warehouseIdInput: string;
```

- *Type:* string

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDir"></a>

```typescript
public readonly assetsDir: string;
```

- *Type:* string

---

##### `baselineTableName`<sup>Required</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableName"></a>

```typescript
public readonly baselineTableName: string;
```

- *Type:* string

---

##### `latestMonitorFailureMsg`<sup>Required</sup> <a name="latestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsg"></a>

```typescript
public readonly latestMonitorFailureMsg: string;
```

- *Type:* string

---

##### `outputSchemaName`<sup>Required</sup> <a name="outputSchemaName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaName"></a>

```typescript
public readonly outputSchemaName: string;
```

- *Type:* string

---

##### `skipBuiltinDashboard`<sup>Required</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboard"></a>

```typescript
public readonly skipBuiltinDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `slicingExprs`<sup>Required</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprs"></a>

```typescript
public readonly slicingExprs: string[];
```

- *Type:* string[]

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QualityMonitorPluginframeworkConfig <a name="QualityMonitorPluginframeworkConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

const qualityMonitorPluginframeworkConfig: qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.assetsDir">assetsDir</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.outputSchemaName">outputSchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.baselineTableName">baselineTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.customMetrics">customMetrics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dataClassificationConfig">dataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.latestMonitorFailureMsg">latestMonitorFailureMsg</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#latest_monitor_failure_msg QualityMonitorPluginframework#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#notifications QualityMonitorPluginframework#notifications}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#schedule QualityMonitorPluginframework#schedule}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.slicingExprs">slicingExprs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.warehouseId">warehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.assetsDir"></a>

```typescript
public readonly assetsDir: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}.

---

##### `outputSchemaName`<sup>Required</sup> <a name="outputSchemaName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.outputSchemaName"></a>

```typescript
public readonly outputSchemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}.

---

##### `baselineTableName`<sup>Optional</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.baselineTableName"></a>

```typescript
public readonly baselineTableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}.

---

##### `customMetrics`<sup>Optional</sup> <a name="customMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.customMetrics"></a>

```typescript
public readonly customMetrics: IResolvable | QualityMonitorPluginframeworkCustomMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}.

---

##### `dataClassificationConfig`<sup>Optional</sup> <a name="dataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dataClassificationConfig"></a>

```typescript
public readonly dataClassificationConfig: QualityMonitorPluginframeworkDataClassificationConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}.

---

##### `inferenceLog`<sup>Optional</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.inferenceLog"></a>

```typescript
public readonly inferenceLog: QualityMonitorPluginframeworkInferenceLog;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}.

---

##### `latestMonitorFailureMsg`<sup>Optional</sup> <a name="latestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.latestMonitorFailureMsg"></a>

```typescript
public readonly latestMonitorFailureMsg: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#latest_monitor_failure_msg QualityMonitorPluginframework#latest_monitor_failure_msg}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.notifications"></a>

```typescript
public readonly notifications: QualityMonitorPluginframeworkNotifications;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#notifications QualityMonitorPluginframework#notifications}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.schedule"></a>

```typescript
public readonly schedule: QualityMonitorPluginframeworkSchedule;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#schedule QualityMonitorPluginframework#schedule}.

---

##### `skipBuiltinDashboard`<sup>Optional</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.skipBuiltinDashboard"></a>

```typescript
public readonly skipBuiltinDashboard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}.

---

##### `slicingExprs`<sup>Optional</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.slicingExprs"></a>

```typescript
public readonly slicingExprs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.snapshot"></a>

```typescript
public readonly snapshot: QualityMonitorPluginframeworkSnapshot;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}.

---

##### `timeSeries`<sup>Optional</sup> <a name="timeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.timeSeries"></a>

```typescript
public readonly timeSeries: QualityMonitorPluginframeworkTimeSeries;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}.

---

### QualityMonitorPluginframeworkCustomMetrics <a name="QualityMonitorPluginframeworkCustomMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

const qualityMonitorPluginframeworkCustomMetrics: qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.definition">definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#definition QualityMonitorPluginframework#definition}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.inputColumns">inputColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#input_columns QualityMonitorPluginframework#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#name QualityMonitorPluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.outputDataType">outputDataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_data_type QualityMonitorPluginframework#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#type QualityMonitorPluginframework#type}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#definition QualityMonitorPluginframework#definition}.

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.inputColumns"></a>

```typescript
public readonly inputColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#input_columns QualityMonitorPluginframework#input_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#name QualityMonitorPluginframework#name}.

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.outputDataType"></a>

```typescript
public readonly outputDataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_data_type QualityMonitorPluginframework#output_data_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#type QualityMonitorPluginframework#type}.

---

### QualityMonitorPluginframeworkDataClassificationConfig <a name="QualityMonitorPluginframeworkDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

const qualityMonitorPluginframeworkDataClassificationConfig: qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#enabled QualityMonitorPluginframework#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#enabled QualityMonitorPluginframework#enabled}.

---

### QualityMonitorPluginframeworkInferenceLog <a name="QualityMonitorPluginframeworkInferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

const qualityMonitorPluginframeworkInferenceLog: qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.granularities">granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.modelIdCol">modelIdCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#model_id_col QualityMonitorPluginframework#model_id_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionCol">predictionCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_col QualityMonitorPluginframework#prediction_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.problemType">problemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#problem_type QualityMonitorPluginframework#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.timestampCol">timestampCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.labelCol">labelCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#label_col QualityMonitorPluginframework#label_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionProbaCol">predictionProbaCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_proba_col QualityMonitorPluginframework#prediction_proba_col}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.granularities"></a>

```typescript
public readonly granularities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}.

---

##### `modelIdCol`<sup>Required</sup> <a name="modelIdCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.modelIdCol"></a>

```typescript
public readonly modelIdCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#model_id_col QualityMonitorPluginframework#model_id_col}.

---

##### `predictionCol`<sup>Required</sup> <a name="predictionCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionCol"></a>

```typescript
public readonly predictionCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_col QualityMonitorPluginframework#prediction_col}.

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.problemType"></a>

```typescript
public readonly problemType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#problem_type QualityMonitorPluginframework#problem_type}.

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.timestampCol"></a>

```typescript
public readonly timestampCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}.

---

##### `labelCol`<sup>Optional</sup> <a name="labelCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.labelCol"></a>

```typescript
public readonly labelCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#label_col QualityMonitorPluginframework#label_col}.

---

##### `predictionProbaCol`<sup>Optional</sup> <a name="predictionProbaCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionProbaCol"></a>

```typescript
public readonly predictionProbaCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_proba_col QualityMonitorPluginframework#prediction_proba_col}.

---

### QualityMonitorPluginframeworkNotifications <a name="QualityMonitorPluginframeworkNotifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

const qualityMonitorPluginframeworkNotifications: qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_failure QualityMonitorPluginframework#on_failure}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onNewClassificationTagDetected">onNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_new_classification_tag_detected QualityMonitorPluginframework#on_new_classification_tag_detected}. |

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onFailure"></a>

```typescript
public readonly onFailure: QualityMonitorPluginframeworkNotificationsOnFailure;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_failure QualityMonitorPluginframework#on_failure}.

---

##### `onNewClassificationTagDetected`<sup>Optional</sup> <a name="onNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onNewClassificationTagDetected"></a>

```typescript
public readonly onNewClassificationTagDetected: QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_new_classification_tag_detected QualityMonitorPluginframework#on_new_classification_tag_detected}.

---

### QualityMonitorPluginframeworkNotificationsOnFailure <a name="QualityMonitorPluginframeworkNotificationsOnFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

const qualityMonitorPluginframeworkNotificationsOnFailure: qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}. |

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}.

---

### QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected <a name="QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

const qualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected: qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}. |

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}.

---

### QualityMonitorPluginframeworkSchedule <a name="QualityMonitorPluginframeworkSchedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

const qualityMonitorPluginframeworkSchedule: qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.quartzCronExpression">quartzCronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#quartz_cron_expression QualityMonitorPluginframework#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.timezoneId">timezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timezone_id QualityMonitorPluginframework#timezone_id}. |

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.quartzCronExpression"></a>

```typescript
public readonly quartzCronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#quartz_cron_expression QualityMonitorPluginframework#quartz_cron_expression}.

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timezone_id QualityMonitorPluginframework#timezone_id}.

---

### QualityMonitorPluginframeworkSnapshot <a name="QualityMonitorPluginframeworkSnapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

const qualityMonitorPluginframeworkSnapshot: qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot = { ... }
```


### QualityMonitorPluginframeworkTimeSeries <a name="QualityMonitorPluginframeworkTimeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

const qualityMonitorPluginframeworkTimeSeries: qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.granularities">granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.timestampCol">timestampCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.granularities"></a>

```typescript
public readonly granularities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}.

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.timestampCol"></a>

```typescript
public readonly timestampCol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}.

---

## Classes <a name="Classes" id="Classes"></a>

### QualityMonitorPluginframeworkCustomMetricsList <a name="QualityMonitorPluginframeworkCustomMetricsList" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

new qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.get"></a>

```typescript
public get(index: number): QualityMonitorPluginframeworkCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorPluginframeworkCustomMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>[]

---


### QualityMonitorPluginframeworkCustomMetricsOutputReference <a name="QualityMonitorPluginframeworkCustomMetricsOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

new qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definitionInput">definitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumnsInput">inputColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataTypeInput">outputDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumns">inputColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataType">outputDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definitionInput"></a>

```typescript
public readonly definitionInput: string;
```

- *Type:* string

---

##### `inputColumnsInput`<sup>Optional</sup> <a name="inputColumnsInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumnsInput"></a>

```typescript
public readonly inputColumnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputDataTypeInput`<sup>Optional</sup> <a name="outputDataTypeInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```typescript
public readonly outputDataTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumns"></a>

```typescript
public readonly inputColumns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataType"></a>

```typescript
public readonly outputDataType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorPluginframeworkCustomMetrics;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>

---


### QualityMonitorPluginframeworkDataClassificationConfigOutputReference <a name="QualityMonitorPluginframeworkDataClassificationConfigOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

new qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorPluginframeworkDataClassificationConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

---


### QualityMonitorPluginframeworkInferenceLogOutputReference <a name="QualityMonitorPluginframeworkInferenceLogOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

new qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetLabelCol">resetLabelCol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetPredictionProbaCol">resetPredictionProbaCol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabelCol` <a name="resetLabelCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetLabelCol"></a>

```typescript
public resetLabelCol(): void
```

##### `resetPredictionProbaCol` <a name="resetPredictionProbaCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetPredictionProbaCol"></a>

```typescript
public resetPredictionProbaCol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelColInput">labelColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdColInput">modelIdColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionColInput">predictionColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaColInput">predictionProbaColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemTypeInput">problemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampColInput">timestampColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularities">granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelCol">labelCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdCol">modelIdCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionCol">predictionCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaCol">predictionProbaCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemType">problemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampCol">timestampCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularitiesInput"></a>

```typescript
public readonly granularitiesInput: string[];
```

- *Type:* string[]

---

##### `labelColInput`<sup>Optional</sup> <a name="labelColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelColInput"></a>

```typescript
public readonly labelColInput: string;
```

- *Type:* string

---

##### `modelIdColInput`<sup>Optional</sup> <a name="modelIdColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdColInput"></a>

```typescript
public readonly modelIdColInput: string;
```

- *Type:* string

---

##### `predictionColInput`<sup>Optional</sup> <a name="predictionColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionColInput"></a>

```typescript
public readonly predictionColInput: string;
```

- *Type:* string

---

##### `predictionProbaColInput`<sup>Optional</sup> <a name="predictionProbaColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaColInput"></a>

```typescript
public readonly predictionProbaColInput: string;
```

- *Type:* string

---

##### `problemTypeInput`<sup>Optional</sup> <a name="problemTypeInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemTypeInput"></a>

```typescript
public readonly problemTypeInput: string;
```

- *Type:* string

---

##### `timestampColInput`<sup>Optional</sup> <a name="timestampColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampColInput"></a>

```typescript
public readonly timestampColInput: string;
```

- *Type:* string

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularities"></a>

```typescript
public readonly granularities: string[];
```

- *Type:* string[]

---

##### `labelCol`<sup>Required</sup> <a name="labelCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelCol"></a>

```typescript
public readonly labelCol: string;
```

- *Type:* string

---

##### `modelIdCol`<sup>Required</sup> <a name="modelIdCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdCol"></a>

```typescript
public readonly modelIdCol: string;
```

- *Type:* string

---

##### `predictionCol`<sup>Required</sup> <a name="predictionCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionCol"></a>

```typescript
public readonly predictionCol: string;
```

- *Type:* string

---

##### `predictionProbaCol`<sup>Required</sup> <a name="predictionProbaCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaCol"></a>

```typescript
public readonly predictionProbaCol: string;
```

- *Type:* string

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemType"></a>

```typescript
public readonly problemType: string;
```

- *Type:* string

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampCol"></a>

```typescript
public readonly timestampCol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorPluginframeworkInferenceLog;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

---


### QualityMonitorPluginframeworkNotificationsOnFailureOutputReference <a name="QualityMonitorPluginframeworkNotificationsOnFailureOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

new qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorPluginframeworkNotificationsOnFailure;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>

---


### QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference <a name="QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

new qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>

---


### QualityMonitorPluginframeworkNotificationsOutputReference <a name="QualityMonitorPluginframeworkNotificationsOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

new qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnNewClassificationTagDetected">putOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnNewClassificationTagDetected">resetOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailure` <a name="putOnFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnFailure"></a>

```typescript
public putOnFailure(value: QualityMonitorPluginframeworkNotificationsOnFailure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>

---

##### `putOnNewClassificationTagDetected` <a name="putOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnNewClassificationTagDetected"></a>

```typescript
public putOnNewClassificationTagDetected(value: QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnNewClassificationTagDetected.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnFailure"></a>

```typescript
public resetOnFailure(): void
```

##### `resetOnNewClassificationTagDetected` <a name="resetOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnNewClassificationTagDetected"></a>

```typescript
public resetOnNewClassificationTagDetected(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference">QualityMonitorPluginframeworkNotificationsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetected">onNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailureInput">onFailureInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetectedInput">onNewClassificationTagDetectedInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: QualityMonitorPluginframeworkNotificationsOnFailureOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference">QualityMonitorPluginframeworkNotificationsOnFailureOutputReference</a>

---

##### `onNewClassificationTagDetected`<sup>Required</sup> <a name="onNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetected"></a>

```typescript
public readonly onNewClassificationTagDetected: QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailureInput"></a>

```typescript
public readonly onFailureInput: IResolvable | QualityMonitorPluginframeworkNotificationsOnFailure;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>

---

##### `onNewClassificationTagDetectedInput`<sup>Optional</sup> <a name="onNewClassificationTagDetectedInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetectedInput"></a>

```typescript
public readonly onNewClassificationTagDetectedInput: IResolvable | QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorPluginframeworkNotifications;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>

---


### QualityMonitorPluginframeworkScheduleOutputReference <a name="QualityMonitorPluginframeworkScheduleOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

new qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.pauseStatus">pauseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpressionInput">quartzCronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneIdInput">timezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpression">quartzCronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneId">timezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pauseStatus`<sup>Required</sup> <a name="pauseStatus" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.pauseStatus"></a>

```typescript
public readonly pauseStatus: string;
```

- *Type:* string

---

##### `quartzCronExpressionInput`<sup>Optional</sup> <a name="quartzCronExpressionInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpressionInput"></a>

```typescript
public readonly quartzCronExpressionInput: string;
```

- *Type:* string

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneIdInput"></a>

```typescript
public readonly timezoneIdInput: string;
```

- *Type:* string

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpression"></a>

```typescript
public readonly quartzCronExpression: string;
```

- *Type:* string

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorPluginframeworkSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>

---


### QualityMonitorPluginframeworkSnapshotOutputReference <a name="QualityMonitorPluginframeworkSnapshotOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

new qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorPluginframeworkSnapshot;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

---


### QualityMonitorPluginframeworkTimeSeriesOutputReference <a name="QualityMonitorPluginframeworkTimeSeriesOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer"></a>

```typescript
import { qualityMonitorPluginframework } from '@cdktf/provider-databricks'

new qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampColInput">timestampColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularities">granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampCol">timestampCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularitiesInput"></a>

```typescript
public readonly granularitiesInput: string[];
```

- *Type:* string[]

---

##### `timestampColInput`<sup>Optional</sup> <a name="timestampColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampColInput"></a>

```typescript
public readonly timestampColInput: string;
```

- *Type:* string

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularities"></a>

```typescript
public readonly granularities: string[];
```

- *Type:* string[]

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampCol"></a>

```typescript
public readonly timestampCol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QualityMonitorPluginframeworkTimeSeries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

---



