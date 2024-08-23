# `dashboard` Submodule <a name="`dashboard` Submodule" id="@cdktf/provider-databricks.dashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Dashboard <a name="Dashboard" id="@cdktf/provider-databricks.dashboard.Dashboard"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard databricks_dashboard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer"></a>

```typescript
import { dashboard } from '@cdktf/provider-databricks'

new dashboard.Dashboard(scope: Construct, id: string, config: DashboardConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig">DashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dashboard.DashboardConfig">DashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetCreateTime">resetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetDashboardChangeDetected">resetDashboardChangeDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetDashboardId">resetDashboardId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetEmbedCredentials">resetEmbedCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetFilePath">resetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetLifecycleState">resetLifecycleState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetMd5">resetMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetSerializedDashboard">resetSerializedDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetUpdateTime">resetUpdateTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dashboard.Dashboard.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dashboard.Dashboard.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dashboard.Dashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dashboard.Dashboard.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dashboard.Dashboard.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dashboard.Dashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dashboard.Dashboard.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dashboard.Dashboard.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dashboard.Dashboard.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dashboard.Dashboard.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.dashboard.Dashboard.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.dashboard.Dashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.dashboard.Dashboard.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.dashboard.Dashboard.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.Dashboard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dashboard.Dashboard.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dashboard.Dashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.dashboard.Dashboard.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.Dashboard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.dashboard.Dashboard.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.dashboard.Dashboard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.dashboard.Dashboard.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.dashboard.Dashboard.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.Dashboard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktf/provider-databricks.dashboard.Dashboard.resetCreateTime"></a>

```typescript
public resetCreateTime(): void
```

##### `resetDashboardChangeDetected` <a name="resetDashboardChangeDetected" id="@cdktf/provider-databricks.dashboard.Dashboard.resetDashboardChangeDetected"></a>

```typescript
public resetDashboardChangeDetected(): void
```

##### `resetDashboardId` <a name="resetDashboardId" id="@cdktf/provider-databricks.dashboard.Dashboard.resetDashboardId"></a>

```typescript
public resetDashboardId(): void
```

##### `resetEmbedCredentials` <a name="resetEmbedCredentials" id="@cdktf/provider-databricks.dashboard.Dashboard.resetEmbedCredentials"></a>

```typescript
public resetEmbedCredentials(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-databricks.dashboard.Dashboard.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetFilePath` <a name="resetFilePath" id="@cdktf/provider-databricks.dashboard.Dashboard.resetFilePath"></a>

```typescript
public resetFilePath(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dashboard.Dashboard.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLifecycleState` <a name="resetLifecycleState" id="@cdktf/provider-databricks.dashboard.Dashboard.resetLifecycleState"></a>

```typescript
public resetLifecycleState(): void
```

##### `resetMd5` <a name="resetMd5" id="@cdktf/provider-databricks.dashboard.Dashboard.resetMd5"></a>

```typescript
public resetMd5(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-databricks.dashboard.Dashboard.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetSerializedDashboard` <a name="resetSerializedDashboard" id="@cdktf/provider-databricks.dashboard.Dashboard.resetSerializedDashboard"></a>

```typescript
public resetSerializedDashboard(): void
```

##### `resetUpdateTime` <a name="resetUpdateTime" id="@cdktf/provider-databricks.dashboard.Dashboard.resetUpdateTime"></a>

```typescript
public resetUpdateTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dashboard.Dashboard.isConstruct"></a>

```typescript
import { dashboard } from '@cdktf/provider-databricks'

dashboard.Dashboard.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dashboard.Dashboard.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dashboard.Dashboard.isTerraformElement"></a>

```typescript
import { dashboard } from '@cdktf/provider-databricks'

dashboard.Dashboard.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dashboard.Dashboard.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.dashboard.Dashboard.isTerraformResource"></a>

```typescript
import { dashboard } from '@cdktf/provider-databricks'

dashboard.Dashboard.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dashboard.Dashboard.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dashboard.Dashboard.generateConfigForImport"></a>

```typescript
import { dashboard } from '@cdktf/provider-databricks'

dashboard.Dashboard.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Dashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Dashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Dashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.createTimeInput">createTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetectedInput">dashboardChangeDetectedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardIdInput">dashboardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.embedCredentialsInput">embedCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.filePathInput">filePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.lifecycleStateInput">lifecycleStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.md5Input">md5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.parentPathInput">parentPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.serializedDashboardInput">serializedDashboardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.updateTimeInput">updateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.warehouseIdInput">warehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetected">dashboardChangeDetected</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardId">dashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.embedCredentials">embedCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.md5">md5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.parentPath">parentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.serializedDashboard">serializedDashboard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dashboard.Dashboard.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dashboard.Dashboard.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dashboard.Dashboard.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dashboard.Dashboard.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dashboard.Dashboard.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dashboard.Dashboard.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dashboard.Dashboard.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dashboard.Dashboard.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dashboard.Dashboard.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dashboard.Dashboard.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dashboard.Dashboard.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dashboard.Dashboard.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dashboard.Dashboard.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dashboard.Dashboard.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.createTimeInput"></a>

```typescript
public readonly createTimeInput: string;
```

- *Type:* string

---

##### `dashboardChangeDetectedInput`<sup>Optional</sup> <a name="dashboardChangeDetectedInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetectedInput"></a>

```typescript
public readonly dashboardChangeDetectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dashboardIdInput`<sup>Optional</sup> <a name="dashboardIdInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardIdInput"></a>

```typescript
public readonly dashboardIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `embedCredentialsInput`<sup>Optional</sup> <a name="embedCredentialsInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.embedCredentialsInput"></a>

```typescript
public readonly embedCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.filePathInput"></a>

```typescript
public readonly filePathInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifecycleStateInput`<sup>Optional</sup> <a name="lifecycleStateInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.lifecycleStateInput"></a>

```typescript
public readonly lifecycleStateInput: string;
```

- *Type:* string

---

##### `md5Input`<sup>Optional</sup> <a name="md5Input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.md5Input"></a>

```typescript
public readonly md5Input: string;
```

- *Type:* string

---

##### `parentPathInput`<sup>Optional</sup> <a name="parentPathInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.parentPathInput"></a>

```typescript
public readonly parentPathInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `serializedDashboardInput`<sup>Optional</sup> <a name="serializedDashboardInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.serializedDashboardInput"></a>

```typescript
public readonly serializedDashboardInput: string;
```

- *Type:* string

---

##### `updateTimeInput`<sup>Optional</sup> <a name="updateTimeInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.updateTimeInput"></a>

```typescript
public readonly updateTimeInput: string;
```

- *Type:* string

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktf/provider-databricks.dashboard.Dashboard.property.warehouseIdInput"></a>

```typescript
public readonly warehouseIdInput: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.dashboard.Dashboard.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dashboardChangeDetected`<sup>Required</sup> <a name="dashboardChangeDetected" id="@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetected"></a>

```typescript
public readonly dashboardChangeDetected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dashboard.Dashboard.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `embedCredentials`<sup>Required</sup> <a name="embedCredentials" id="@cdktf/provider-databricks.dashboard.Dashboard.property.embedCredentials"></a>

```typescript
public readonly embedCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.dashboard.Dashboard.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-databricks.dashboard.Dashboard.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.Dashboard.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-databricks.dashboard.Dashboard.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `md5`<sup>Required</sup> <a name="md5" id="@cdktf/provider-databricks.dashboard.Dashboard.property.md5"></a>

```typescript
public readonly md5: string;
```

- *Type:* string

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktf/provider-databricks.dashboard.Dashboard.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dashboard.Dashboard.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `serializedDashboard`<sup>Required</sup> <a name="serializedDashboard" id="@cdktf/provider-databricks.dashboard.Dashboard.property.serializedDashboard"></a>

```typescript
public readonly serializedDashboard: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.dashboard.Dashboard.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dashboard.Dashboard.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dashboard.Dashboard.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardConfig <a name="DashboardConfig" id="@cdktf/provider-databricks.dashboard.DashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dashboard.DashboardConfig.Initializer"></a>

```typescript
import { dashboard } from '@cdktf/provider-databricks'

const dashboardConfig: dashboard.DashboardConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#display_name Dashboard#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.parentPath">parentPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#parent_path Dashboard#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.warehouseId">warehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#warehouse_id Dashboard#warehouse_id}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.createTime">createTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#create_time Dashboard#create_time}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.dashboardChangeDetected">dashboardChangeDetected</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#dashboard_change_detected Dashboard#dashboard_change_detected}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.dashboardId">dashboardId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#dashboard_id Dashboard#dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.embedCredentials">embedCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#embed_credentials Dashboard#embed_credentials}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#etag Dashboard#etag}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.filePath">filePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#file_path Dashboard#file_path}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#id Dashboard#id}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#lifecycle_state Dashboard#lifecycle_state}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.md5">md5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#md5 Dashboard#md5}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#path Dashboard#path}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.serializedDashboard">serializedDashboard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#serialized_dashboard Dashboard#serialized_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.updateTime">updateTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#update_time Dashboard#update_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#display_name Dashboard#display_name}.

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#parent_path Dashboard#parent_path}.

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#warehouse_id Dashboard#warehouse_id}.

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#create_time Dashboard#create_time}.

---

##### `dashboardChangeDetected`<sup>Optional</sup> <a name="dashboardChangeDetected" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.dashboardChangeDetected"></a>

```typescript
public readonly dashboardChangeDetected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#dashboard_change_detected Dashboard#dashboard_change_detected}.

---

##### `dashboardId`<sup>Optional</sup> <a name="dashboardId" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#dashboard_id Dashboard#dashboard_id}.

---

##### `embedCredentials`<sup>Optional</sup> <a name="embedCredentials" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.embedCredentials"></a>

```typescript
public readonly embedCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#embed_credentials Dashboard#embed_credentials}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#etag Dashboard#etag}.

---

##### `filePath`<sup>Optional</sup> <a name="filePath" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#file_path Dashboard#file_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#id Dashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleState`<sup>Optional</sup> <a name="lifecycleState" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#lifecycle_state Dashboard#lifecycle_state}.

---

##### `md5`<sup>Optional</sup> <a name="md5" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.md5"></a>

```typescript
public readonly md5: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#md5 Dashboard#md5}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#path Dashboard#path}.

---

##### `serializedDashboard`<sup>Optional</sup> <a name="serializedDashboard" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.serializedDashboard"></a>

```typescript
public readonly serializedDashboard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#serialized_dashboard Dashboard#serialized_dashboard}.

---

##### `updateTime`<sup>Optional</sup> <a name="updateTime" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/dashboard#update_time Dashboard#update_time}.

---



