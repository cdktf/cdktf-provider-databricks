# `databricks_sql_visualization`

Refer to the Terraform Registory for docs: [`databricks_sql_visualization`](https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization).

# `sqlVisualization` Submodule <a name="`sqlVisualization` Submodule" id="@cdktf/provider-databricks.sqlVisualization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlVisualization <a name="SqlVisualization" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization databricks_sql_visualization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.Initializer"></a>

```typescript
import { sqlVisualization } from '@cdktf/provider-databricks'

new sqlVisualization.SqlVisualization(scope: Construct, id: string, config: SqlVisualizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig">SqlVisualizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig">SqlVisualizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.resetQueryPlan">resetQueryPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.resetVisualizationId">resetVisualizationId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.resetId"></a>

```typescript
public resetId(): void
```

##### `resetQueryPlan` <a name="resetQueryPlan" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.resetQueryPlan"></a>

```typescript
public resetQueryPlan(): void
```

##### `resetVisualizationId` <a name="resetVisualizationId" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.resetVisualizationId"></a>

```typescript
public resetVisualizationId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlVisualization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.isConstruct"></a>

```typescript
import { sqlVisualization } from '@cdktf/provider-databricks'

sqlVisualization.SqlVisualization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.isTerraformElement"></a>

```typescript
import { sqlVisualization } from '@cdktf/provider-databricks'

sqlVisualization.SqlVisualization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.isTerraformResource"></a>

```typescript
import { sqlVisualization } from '@cdktf/provider-databricks'

sqlVisualization.SqlVisualization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.generateConfigForImport"></a>

```typescript
import { sqlVisualization } from '@cdktf/provider-databricks'

sqlVisualization.SqlVisualization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SqlVisualization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlVisualization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlVisualization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlVisualization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.optionsInput">optionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.queryIdInput">queryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.queryPlanInput">queryPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.visualizationIdInput">visualizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.queryId">queryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.queryPlan">queryPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.visualizationId">visualizationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.optionsInput"></a>

```typescript
public readonly optionsInput: string;
```

- *Type:* string

---

##### `queryIdInput`<sup>Optional</sup> <a name="queryIdInput" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.queryIdInput"></a>

```typescript
public readonly queryIdInput: string;
```

- *Type:* string

---

##### `queryPlanInput`<sup>Optional</sup> <a name="queryPlanInput" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.queryPlanInput"></a>

```typescript
public readonly queryPlanInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `visualizationIdInput`<sup>Optional</sup> <a name="visualizationIdInput" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.visualizationIdInput"></a>

```typescript
public readonly visualizationIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.queryId"></a>

```typescript
public readonly queryId: string;
```

- *Type:* string

---

##### `queryPlan`<sup>Required</sup> <a name="queryPlan" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.queryPlan"></a>

```typescript
public readonly queryPlan: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `visualizationId`<sup>Required</sup> <a name="visualizationId" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.visualizationId"></a>

```typescript
public readonly visualizationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlVisualizationConfig <a name="SqlVisualizationConfig" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.Initializer"></a>

```typescript
import { sqlVisualization } from '@cdktf/provider-databricks'

const sqlVisualizationConfig: sqlVisualization.SqlVisualizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#name SqlVisualization#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.options">options</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#options SqlVisualization#options}. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.queryId">queryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#query_id SqlVisualization#query_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#type SqlVisualization#type}. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#description SqlVisualization#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#id SqlVisualization#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.queryPlan">queryPlan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#query_plan SqlVisualization#query_plan}. |
| <code><a href="#@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.visualizationId">visualizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#visualization_id SqlVisualization#visualization_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#name SqlVisualization#name}.

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#options SqlVisualization#options}.

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.queryId"></a>

```typescript
public readonly queryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#query_id SqlVisualization#query_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#type SqlVisualization#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#description SqlVisualization#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#id SqlVisualization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryPlan`<sup>Optional</sup> <a name="queryPlan" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.queryPlan"></a>

```typescript
public readonly queryPlan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#query_plan SqlVisualization#query_plan}.

---

##### `visualizationId`<sup>Optional</sup> <a name="visualizationId" id="@cdktf/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.visualizationId"></a>

```typescript
public readonly visualizationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/sql_visualization#visualization_id SqlVisualization#visualization_id}.

---



