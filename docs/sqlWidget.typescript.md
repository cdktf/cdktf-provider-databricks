# `sqlWidget` Submodule <a name="`sqlWidget` Submodule" id="@cdktf/provider-databricks.sqlWidget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlWidget <a name="SqlWidget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget databricks_sql_widget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer"></a>

```typescript
import { sqlWidget } from '@cdktf/provider-databricks'

new sqlWidget.SqlWidget(scope: Construct, id: string, config: SqlWidgetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig">SqlWidgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig">SqlWidgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition">putPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetVisualizationId">resetVisualizationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetWidgetId">resetWidgetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putParameter"></a>

```typescript
public putParameter(value: IResolvable | SqlWidgetParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>[]

---

##### `putPosition` <a name="putPosition" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition"></a>

```typescript
public putPosition(value: SqlWidgetPosition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetPosition"></a>

```typescript
public resetPosition(): void
```

##### `resetText` <a name="resetText" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetText"></a>

```typescript
public resetText(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetVisualizationId` <a name="resetVisualizationId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetVisualizationId"></a>

```typescript
public resetVisualizationId(): void
```

##### `resetWidgetId` <a name="resetWidgetId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetWidgetId"></a>

```typescript
public resetWidgetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlWidget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isConstruct"></a>

```typescript
import { sqlWidget } from '@cdktf/provider-databricks'

sqlWidget.SqlWidget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformElement"></a>

```typescript
import { sqlWidget } from '@cdktf/provider-databricks'

sqlWidget.SqlWidget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformResource"></a>

```typescript
import { sqlWidget } from '@cdktf/provider-databricks'

sqlWidget.SqlWidget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport"></a>

```typescript
import { sqlWidget } from '@cdktf/provider-databricks'

sqlWidget.SqlWidget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SqlWidget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlWidget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlWidget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlWidget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList">SqlWidgetParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.position">position</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference">SqlWidgetPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardIdInput">dashboardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.positionInput">positionInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationIdInput">visualizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetIdInput">widgetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardId">dashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationId">visualizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetId">widgetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameter"></a>

```typescript
public readonly parameter: SqlWidgetParameterList;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList">SqlWidgetParameterList</a>

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.position"></a>

```typescript
public readonly position: SqlWidgetPositionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference">SqlWidgetPositionOutputReference</a>

---

##### `dashboardIdInput`<sup>Optional</sup> <a name="dashboardIdInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardIdInput"></a>

```typescript
public readonly dashboardIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | SqlWidgetParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>[]

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.positionInput"></a>

```typescript
public readonly positionInput: SqlWidgetPosition;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `visualizationIdInput`<sup>Optional</sup> <a name="visualizationIdInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationIdInput"></a>

```typescript
public readonly visualizationIdInput: string;
```

- *Type:* string

---

##### `widgetIdInput`<sup>Optional</sup> <a name="widgetIdInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetIdInput"></a>

```typescript
public readonly widgetIdInput: string;
```

- *Type:* string

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `visualizationId`<sup>Required</sup> <a name="visualizationId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationId"></a>

```typescript
public readonly visualizationId: string;
```

- *Type:* string

---

##### `widgetId`<sup>Required</sup> <a name="widgetId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetId"></a>

```typescript
public readonly widgetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlWidgetConfig <a name="SqlWidgetConfig" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.Initializer"></a>

```typescript
import { sqlWidget } from '@cdktf/provider-databricks'

const sqlWidgetConfig: sqlWidget.SqlWidgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dashboardId">dashboardId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#description SqlWidget#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#id SqlWidget#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.position">position</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | position block. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.text">text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#text SqlWidget#text}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#title SqlWidget#title}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.visualizationId">visualizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.widgetId">widgetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#widget_id SqlWidget#widget_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#description SqlWidget#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#id SqlWidget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | SqlWidgetParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#parameter SqlWidget#parameter}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.position"></a>

```typescript
public readonly position: SqlWidgetPosition;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

position block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#position SqlWidget#position}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#text SqlWidget#text}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#title SqlWidget#title}.

---

##### `visualizationId`<sup>Optional</sup> <a name="visualizationId" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.visualizationId"></a>

```typescript
public readonly visualizationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}.

---

##### `widgetId`<sup>Optional</sup> <a name="widgetId" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.widgetId"></a>

```typescript
public readonly widgetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#widget_id SqlWidget#widget_id}.

---

### SqlWidgetParameter <a name="SqlWidgetParameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.Initializer"></a>

```typescript
import { sqlWidget } from '@cdktf/provider-databricks'

const sqlWidgetParameter: sqlWidget.SqlWidgetParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#name SqlWidget#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#type SqlWidget#type}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.mapTo">mapTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#map_to SqlWidget#map_to}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#title SqlWidget#title}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#value SqlWidget#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#values SqlWidget#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#name SqlWidget#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#type SqlWidget#type}.

---

##### `mapTo`<sup>Optional</sup> <a name="mapTo" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.mapTo"></a>

```typescript
public readonly mapTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#map_to SqlWidget#map_to}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#title SqlWidget#title}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#value SqlWidget#value}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#values SqlWidget#values}.

---

### SqlWidgetPosition <a name="SqlWidgetPosition" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.Initializer"></a>

```typescript
import { sqlWidget } from '@cdktf/provider-databricks'

const sqlWidgetPosition: sqlWidget.SqlWidgetPosition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeX">sizeX</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#size_x SqlWidget#size_x}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeY">sizeY</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#size_y SqlWidget#size_y}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.autoHeight">autoHeight</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#auto_height SqlWidget#auto_height}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posX">posX</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#pos_x SqlWidget#pos_x}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posY">posY</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#pos_y SqlWidget#pos_y}. |

---

##### `sizeX`<sup>Required</sup> <a name="sizeX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeX"></a>

```typescript
public readonly sizeX: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#size_x SqlWidget#size_x}.

---

##### `sizeY`<sup>Required</sup> <a name="sizeY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeY"></a>

```typescript
public readonly sizeY: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#size_y SqlWidget#size_y}.

---

##### `autoHeight`<sup>Optional</sup> <a name="autoHeight" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.autoHeight"></a>

```typescript
public readonly autoHeight: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#auto_height SqlWidget#auto_height}.

---

##### `posX`<sup>Optional</sup> <a name="posX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posX"></a>

```typescript
public readonly posX: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#pos_x SqlWidget#pos_x}.

---

##### `posY`<sup>Optional</sup> <a name="posY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posY"></a>

```typescript
public readonly posY: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/sql_widget#pos_y SqlWidget#pos_y}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlWidgetParameterList <a name="SqlWidgetParameterList" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer"></a>

```typescript
import { sqlWidget } from '@cdktf/provider-databricks'

new sqlWidget.SqlWidgetParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.get"></a>

```typescript
public get(index: number): SqlWidgetParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlWidgetParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>[]

---


### SqlWidgetParameterOutputReference <a name="SqlWidgetParameterOutputReference" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer"></a>

```typescript
import { sqlWidget } from '@cdktf/provider-databricks'

new sqlWidget.SqlWidgetParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetMapTo">resetMapTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMapTo` <a name="resetMapTo" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetMapTo"></a>

```typescript
public resetMapTo(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapToInput">mapToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapTo">mapTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mapToInput`<sup>Optional</sup> <a name="mapToInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapToInput"></a>

```typescript
public readonly mapToInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `mapTo`<sup>Required</sup> <a name="mapTo" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapTo"></a>

```typescript
public readonly mapTo: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlWidgetParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>

---


### SqlWidgetPositionOutputReference <a name="SqlWidgetPositionOutputReference" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer"></a>

```typescript
import { sqlWidget } from '@cdktf/provider-databricks'

new sqlWidget.SqlWidgetPositionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetAutoHeight">resetAutoHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosX">resetPosX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosY">resetPosY</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoHeight` <a name="resetAutoHeight" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetAutoHeight"></a>

```typescript
public resetAutoHeight(): void
```

##### `resetPosX` <a name="resetPosX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosX"></a>

```typescript
public resetPosX(): void
```

##### `resetPosY` <a name="resetPosY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosY"></a>

```typescript
public resetPosY(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeightInput">autoHeightInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posXInput">posXInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posYInput">posYInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeXInput">sizeXInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeYInput">sizeYInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeight">autoHeight</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posX">posX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posY">posY</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeX">sizeX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeY">sizeY</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoHeightInput`<sup>Optional</sup> <a name="autoHeightInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeightInput"></a>

```typescript
public readonly autoHeightInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `posXInput`<sup>Optional</sup> <a name="posXInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posXInput"></a>

```typescript
public readonly posXInput: number;
```

- *Type:* number

---

##### `posYInput`<sup>Optional</sup> <a name="posYInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posYInput"></a>

```typescript
public readonly posYInput: number;
```

- *Type:* number

---

##### `sizeXInput`<sup>Optional</sup> <a name="sizeXInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeXInput"></a>

```typescript
public readonly sizeXInput: number;
```

- *Type:* number

---

##### `sizeYInput`<sup>Optional</sup> <a name="sizeYInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeYInput"></a>

```typescript
public readonly sizeYInput: number;
```

- *Type:* number

---

##### `autoHeight`<sup>Required</sup> <a name="autoHeight" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeight"></a>

```typescript
public readonly autoHeight: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `posX`<sup>Required</sup> <a name="posX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posX"></a>

```typescript
public readonly posX: number;
```

- *Type:* number

---

##### `posY`<sup>Required</sup> <a name="posY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posY"></a>

```typescript
public readonly posY: number;
```

- *Type:* number

---

##### `sizeX`<sup>Required</sup> <a name="sizeX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeX"></a>

```typescript
public readonly sizeX: number;
```

- *Type:* number

---

##### `sizeY`<sup>Required</sup> <a name="sizeY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeY"></a>

```typescript
public readonly sizeY: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlWidgetPosition;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---



