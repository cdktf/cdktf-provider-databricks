# `query` Submodule <a name="`query` Submodule" id="@cdktf/provider-databricks.query"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Query <a name="Query" id="@cdktf/provider-databricks.query.Query"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query databricks_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.Query.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

new query.Query(scope: Construct, id: string, config: QueryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryConfig">QueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryConfig">QueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.query.Query.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.query.Query.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.query.Query.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.query.Query.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetApplyAutoLimit">resetApplyAutoLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetOwnerUserName">resetOwnerUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetParentPath">resetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetRunAsMode">resetRunAsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.Query.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.query.Query.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.query.Query.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.Query.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.query.Query.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.query.Query.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.query.Query.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.query.Query.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.query.Query.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.query.Query.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.query.Query.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.query.Query.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.Query.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.Query.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.Query.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.Query.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.Query.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.Query.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.Query.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.query.Query.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.query.Query.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.Query.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.query.Query.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.query.Query.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.query.Query.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.query.Query.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.query.Query.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-databricks.query.Query.putParameter"></a>

```typescript
public putParameter(value: IResolvable | QueryParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.Query.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>[]

---

##### `resetApplyAutoLimit` <a name="resetApplyAutoLimit" id="@cdktf/provider-databricks.query.Query.resetApplyAutoLimit"></a>

```typescript
public resetApplyAutoLimit(): void
```

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-databricks.query.Query.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.query.Query.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetOwnerUserName` <a name="resetOwnerUserName" id="@cdktf/provider-databricks.query.Query.resetOwnerUserName"></a>

```typescript
public resetOwnerUserName(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-databricks.query.Query.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetParentPath` <a name="resetParentPath" id="@cdktf/provider-databricks.query.Query.resetParentPath"></a>

```typescript
public resetParentPath(): void
```

##### `resetRunAsMode` <a name="resetRunAsMode" id="@cdktf/provider-databricks.query.Query.resetRunAsMode"></a>

```typescript
public resetRunAsMode(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-databricks.query.Query.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.query.Query.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Query resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.query.Query.isConstruct"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

query.Query.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.query.Query.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.query.Query.isTerraformElement"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

query.Query.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.query.Query.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.query.Query.isTerraformResource"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

query.Query.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.query.Query.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.query.Query.generateConfigForImport"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

query.Query.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Query resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Query to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Query that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Query to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lastModifierUserName">lastModifierUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterList">QueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.applyAutoLimitInput">applyAutoLimitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.ownerUserNameInput">ownerUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parentPathInput">parentPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.queryTextInput">queryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.runAsModeInput">runAsModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.warehouseIdInput">warehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.applyAutoLimit">applyAutoLimit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.ownerUserName">ownerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parentPath">parentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.queryText">queryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.runAsMode">runAsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.query.Query.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.query.Query.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.Query.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.query.Query.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.query.Query.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.query.Query.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.query.Query.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.query.Query.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.query.Query.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.query.Query.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.query.Query.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.query.Query.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.query.Query.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.query.Query.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifierUserName`<sup>Required</sup> <a name="lastModifierUserName" id="@cdktf/provider-databricks.query.Query.property.lastModifierUserName"></a>

```typescript
public readonly lastModifierUserName: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-databricks.query.Query.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-databricks.query.Query.property.parameter"></a>

```typescript
public readonly parameter: QueryParameterList;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterList">QueryParameterList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.query.Query.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `applyAutoLimitInput`<sup>Optional</sup> <a name="applyAutoLimitInput" id="@cdktf/provider-databricks.query.Query.property.applyAutoLimitInput"></a>

```typescript
public readonly applyAutoLimitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-databricks.query.Query.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.query.Query.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.query.Query.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `ownerUserNameInput`<sup>Optional</sup> <a name="ownerUserNameInput" id="@cdktf/provider-databricks.query.Query.property.ownerUserNameInput"></a>

```typescript
public readonly ownerUserNameInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-databricks.query.Query.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | QueryParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>[]

---

##### `parentPathInput`<sup>Optional</sup> <a name="parentPathInput" id="@cdktf/provider-databricks.query.Query.property.parentPathInput"></a>

```typescript
public readonly parentPathInput: string;
```

- *Type:* string

---

##### `queryTextInput`<sup>Optional</sup> <a name="queryTextInput" id="@cdktf/provider-databricks.query.Query.property.queryTextInput"></a>

```typescript
public readonly queryTextInput: string;
```

- *Type:* string

---

##### `runAsModeInput`<sup>Optional</sup> <a name="runAsModeInput" id="@cdktf/provider-databricks.query.Query.property.runAsModeInput"></a>

```typescript
public readonly runAsModeInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-databricks.query.Query.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.query.Query.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktf/provider-databricks.query.Query.property.warehouseIdInput"></a>

```typescript
public readonly warehouseIdInput: string;
```

- *Type:* string

---

##### `applyAutoLimit`<sup>Required</sup> <a name="applyAutoLimit" id="@cdktf/provider-databricks.query.Query.property.applyAutoLimit"></a>

```typescript
public readonly applyAutoLimit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-databricks.query.Query.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.query.Query.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.query.Query.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `ownerUserName`<sup>Required</sup> <a name="ownerUserName" id="@cdktf/provider-databricks.query.Query.property.ownerUserName"></a>

```typescript
public readonly ownerUserName: string;
```

- *Type:* string

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktf/provider-databricks.query.Query.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="@cdktf/provider-databricks.query.Query.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

---

##### `runAsMode`<sup>Required</sup> <a name="runAsMode" id="@cdktf/provider-databricks.query.Query.property.runAsMode"></a>

```typescript
public readonly runAsMode: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-databricks.query.Query.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.query.Query.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.query.Query.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.query.Query.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QueryConfig <a name="QueryConfig" id="@cdktf/provider-databricks.query.QueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryConfig.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

const queryConfig: query.QueryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#display_name Query#display_name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.queryText">queryText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#query_text Query#query_text}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.warehouseId">warehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#warehouse_id Query#warehouse_id}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.applyAutoLimit">applyAutoLimit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.catalog">catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#catalog Query#catalog}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#description Query#description}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.ownerUserName">ownerUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#owner_user_name Query#owner_user_name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.parentPath">parentPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#parent_path Query#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.runAsMode">runAsMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#run_as_mode Query#run_as_mode}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.schema">schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#schema Query#schema}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#tags Query#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.query.QueryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.query.QueryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.query.QueryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.query.QueryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.query.QueryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.QueryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.query.QueryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.query.QueryConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#display_name Query#display_name}.

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="@cdktf/provider-databricks.query.QueryConfig.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#query_text Query#query_text}.

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.query.QueryConfig.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#warehouse_id Query#warehouse_id}.

---

##### `applyAutoLimit`<sup>Optional</sup> <a name="applyAutoLimit" id="@cdktf/provider-databricks.query.QueryConfig.property.applyAutoLimit"></a>

```typescript
public readonly applyAutoLimit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.query.QueryConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#catalog Query#catalog}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.query.QueryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#description Query#description}.

---

##### `ownerUserName`<sup>Optional</sup> <a name="ownerUserName" id="@cdktf/provider-databricks.query.QueryConfig.property.ownerUserName"></a>

```typescript
public readonly ownerUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#owner_user_name Query#owner_user_name}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.query.QueryConfig.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | QueryParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#parameter Query#parameter}

---

##### `parentPath`<sup>Optional</sup> <a name="parentPath" id="@cdktf/provider-databricks.query.QueryConfig.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#parent_path Query#parent_path}.

---

##### `runAsMode`<sup>Optional</sup> <a name="runAsMode" id="@cdktf/provider-databricks.query.QueryConfig.property.runAsMode"></a>

```typescript
public readonly runAsMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#run_as_mode Query#run_as_mode}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-databricks.query.QueryConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#schema Query#schema}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.query.QueryConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#tags Query#tags}.

---

### QueryParameter <a name="QueryParameter" id="@cdktf/provider-databricks.query.QueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameter.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

const queryParameter: query.QueryParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#name Query#name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.dateRangeValue">dateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | date_range_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.dateValue">dateValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | date_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.enumValue">enumValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | enum_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.numericValue">numericValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | numeric_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.queryBackedValue">queryBackedValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | query_backed_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.textValue">textValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | text_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#title Query#title}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.query.QueryParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#name Query#name}.

---

##### `dateRangeValue`<sup>Optional</sup> <a name="dateRangeValue" id="@cdktf/provider-databricks.query.QueryParameter.property.dateRangeValue"></a>

```typescript
public readonly dateRangeValue: QueryParameterDateRangeValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

date_range_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#date_range_value Query#date_range_value}

---

##### `dateValue`<sup>Optional</sup> <a name="dateValue" id="@cdktf/provider-databricks.query.QueryParameter.property.dateValue"></a>

```typescript
public readonly dateValue: QueryParameterDateValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

date_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#date_value Query#date_value}

---

##### `enumValue`<sup>Optional</sup> <a name="enumValue" id="@cdktf/provider-databricks.query.QueryParameter.property.enumValue"></a>

```typescript
public readonly enumValue: QueryParameterEnumValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

enum_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#enum_value Query#enum_value}

---

##### `numericValue`<sup>Optional</sup> <a name="numericValue" id="@cdktf/provider-databricks.query.QueryParameter.property.numericValue"></a>

```typescript
public readonly numericValue: QueryParameterNumericValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

numeric_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#numeric_value Query#numeric_value}

---

##### `queryBackedValue`<sup>Optional</sup> <a name="queryBackedValue" id="@cdktf/provider-databricks.query.QueryParameter.property.queryBackedValue"></a>

```typescript
public readonly queryBackedValue: QueryParameterQueryBackedValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

query_backed_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#query_backed_value Query#query_backed_value}

---

##### `textValue`<sup>Optional</sup> <a name="textValue" id="@cdktf/provider-databricks.query.QueryParameter.property.textValue"></a>

```typescript
public readonly textValue: QueryParameterTextValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

text_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#text_value Query#text_value}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-databricks.query.QueryParameter.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#title Query#title}.

---

### QueryParameterDateRangeValue <a name="QueryParameterDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

const queryParameterDateRangeValue: query.QueryParameterDateRangeValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dateRangeValue">dateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | date_range_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dynamicDateRangeValue">dynamicDateRangeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#dynamic_date_range_value Query#dynamic_date_range_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.precision">precision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#precision Query#precision}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.startDayOfWeek">startDayOfWeek</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#start_day_of_week Query#start_day_of_week}. |

---

##### `dateRangeValue`<sup>Optional</sup> <a name="dateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dateRangeValue"></a>

```typescript
public readonly dateRangeValue: QueryParameterDateRangeValueDateRangeValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

date_range_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#date_range_value Query#date_range_value}

---

##### `dynamicDateRangeValue`<sup>Optional</sup> <a name="dynamicDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dynamicDateRangeValue"></a>

```typescript
public readonly dynamicDateRangeValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#dynamic_date_range_value Query#dynamic_date_range_value}.

---

##### `precision`<sup>Optional</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.precision"></a>

```typescript
public readonly precision: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#precision Query#precision}.

---

##### `startDayOfWeek`<sup>Optional</sup> <a name="startDayOfWeek" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.startDayOfWeek"></a>

```typescript
public readonly startDayOfWeek: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#start_day_of_week Query#start_day_of_week}.

---

### QueryParameterDateRangeValueDateRangeValue <a name="QueryParameterDateRangeValueDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

const queryParameterDateRangeValueDateRangeValue: query.QueryParameterDateRangeValueDateRangeValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.end">end</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#end Query#end}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.start">start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#start Query#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#end Query#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#start Query#start}.

---

### QueryParameterDateValue <a name="QueryParameterDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateValue.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

const queryParameterDateValue: query.QueryParameterDateValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.dateValue">dateValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#date_value Query#date_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.dynamicDateValue">dynamicDateValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#dynamic_date_value Query#dynamic_date_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.precision">precision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#precision Query#precision}. |

---

##### `dateValue`<sup>Optional</sup> <a name="dateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.dateValue"></a>

```typescript
public readonly dateValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#date_value Query#date_value}.

---

##### `dynamicDateValue`<sup>Optional</sup> <a name="dynamicDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.dynamicDateValue"></a>

```typescript
public readonly dynamicDateValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#dynamic_date_value Query#dynamic_date_value}.

---

##### `precision`<sup>Optional</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.precision"></a>

```typescript
public readonly precision: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#precision Query#precision}.

---

### QueryParameterEnumValue <a name="QueryParameterEnumValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

const queryParameterEnumValue: query.QueryParameterEnumValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.enumOptions">enumOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#enum_options Query#enum_options}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.multiValuesOptions">multiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | multi_values_options block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#values Query#values}. |

---

##### `enumOptions`<sup>Optional</sup> <a name="enumOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.enumOptions"></a>

```typescript
public readonly enumOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#enum_options Query#enum_options}.

---

##### `multiValuesOptions`<sup>Optional</sup> <a name="multiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.multiValuesOptions"></a>

```typescript
public readonly multiValuesOptions: QueryParameterEnumValueMultiValuesOptions;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

multi_values_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#multi_values_options Query#multi_values_options}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#values Query#values}.

---

### QueryParameterEnumValueMultiValuesOptions <a name="QueryParameterEnumValueMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

const queryParameterEnumValueMultiValuesOptions: query.QueryParameterEnumValueMultiValuesOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#prefix Query#prefix}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.separator">separator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#separator Query#separator}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.suffix">suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#suffix Query#suffix}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#prefix Query#prefix}.

---

##### `separator`<sup>Optional</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#separator Query#separator}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#suffix Query#suffix}.

---

### QueryParameterNumericValue <a name="QueryParameterNumericValue" id="@cdktf/provider-databricks.query.QueryParameterNumericValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterNumericValue.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

const queryParameterNumericValue: query.QueryParameterNumericValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#value Query#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterNumericValue.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#value Query#value}.

---

### QueryParameterQueryBackedValue <a name="QueryParameterQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

const queryParameterQueryBackedValue: query.QueryParameterQueryBackedValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.queryId">queryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#query_id Query#query_id}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.multiValuesOptions">multiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | multi_values_options block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#values Query#values}. |

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.queryId"></a>

```typescript
public readonly queryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#query_id Query#query_id}.

---

##### `multiValuesOptions`<sup>Optional</sup> <a name="multiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.multiValuesOptions"></a>

```typescript
public readonly multiValuesOptions: QueryParameterQueryBackedValueMultiValuesOptions;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

multi_values_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#multi_values_options Query#multi_values_options}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#values Query#values}.

---

### QueryParameterQueryBackedValueMultiValuesOptions <a name="QueryParameterQueryBackedValueMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

const queryParameterQueryBackedValueMultiValuesOptions: query.QueryParameterQueryBackedValueMultiValuesOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#prefix Query#prefix}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.separator">separator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#separator Query#separator}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.suffix">suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#suffix Query#suffix}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#prefix Query#prefix}.

---

##### `separator`<sup>Optional</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#separator Query#separator}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#suffix Query#suffix}.

---

### QueryParameterTextValue <a name="QueryParameterTextValue" id="@cdktf/provider-databricks.query.QueryParameterTextValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterTextValue.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

const queryParameterTextValue: query.QueryParameterTextValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#value Query#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterTextValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/query#value Query#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QueryParameterDateRangeValueDateRangeValueOutputReference <a name="QueryParameterDateRangeValueDateRangeValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

new query.QueryParameterDateRangeValueDateRangeValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QueryParameterDateRangeValueDateRangeValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---


### QueryParameterDateRangeValueOutputReference <a name="QueryParameterDateRangeValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

new query.QueryParameterDateRangeValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue">putDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDateRangeValue">resetDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDynamicDateRangeValue">resetDynamicDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetPrecision">resetPrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetStartDayOfWeek">resetStartDayOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateRangeValue` <a name="putDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue"></a>

```typescript
public putDateRangeValue(value: QueryParameterDateRangeValueDateRangeValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---

##### `resetDateRangeValue` <a name="resetDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDateRangeValue"></a>

```typescript
public resetDateRangeValue(): void
```

##### `resetDynamicDateRangeValue` <a name="resetDynamicDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDynamicDateRangeValue"></a>

```typescript
public resetDynamicDateRangeValue(): void
```

##### `resetPrecision` <a name="resetPrecision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetPrecision"></a>

```typescript
public resetPrecision(): void
```

##### `resetStartDayOfWeek` <a name="resetStartDayOfWeek" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetStartDayOfWeek"></a>

```typescript
public resetStartDayOfWeek(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValue">dateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference">QueryParameterDateRangeValueDateRangeValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValueInput">dateRangeValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValueInput">dynamicDateRangeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precisionInput">precisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeekInput">startDayOfWeekInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValue">dynamicDateRangeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precision">precision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeek">startDayOfWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateRangeValue`<sup>Required</sup> <a name="dateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValue"></a>

```typescript
public readonly dateRangeValue: QueryParameterDateRangeValueDateRangeValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference">QueryParameterDateRangeValueDateRangeValueOutputReference</a>

---

##### `dateRangeValueInput`<sup>Optional</sup> <a name="dateRangeValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValueInput"></a>

```typescript
public readonly dateRangeValueInput: QueryParameterDateRangeValueDateRangeValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---

##### `dynamicDateRangeValueInput`<sup>Optional</sup> <a name="dynamicDateRangeValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValueInput"></a>

```typescript
public readonly dynamicDateRangeValueInput: string;
```

- *Type:* string

---

##### `precisionInput`<sup>Optional</sup> <a name="precisionInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precisionInput"></a>

```typescript
public readonly precisionInput: string;
```

- *Type:* string

---

##### `startDayOfWeekInput`<sup>Optional</sup> <a name="startDayOfWeekInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeekInput"></a>

```typescript
public readonly startDayOfWeekInput: number;
```

- *Type:* number

---

##### `dynamicDateRangeValue`<sup>Required</sup> <a name="dynamicDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValue"></a>

```typescript
public readonly dynamicDateRangeValue: string;
```

- *Type:* string

---

##### `precision`<sup>Required</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precision"></a>

```typescript
public readonly precision: string;
```

- *Type:* string

---

##### `startDayOfWeek`<sup>Required</sup> <a name="startDayOfWeek" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeek"></a>

```typescript
public readonly startDayOfWeek: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QueryParameterDateRangeValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---


### QueryParameterDateValueOutputReference <a name="QueryParameterDateValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

new query.QueryParameterDateValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDateValue">resetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDynamicDateValue">resetDynamicDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetPrecision">resetPrecision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDateValue` <a name="resetDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDateValue"></a>

```typescript
public resetDateValue(): void
```

##### `resetDynamicDateValue` <a name="resetDynamicDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDynamicDateValue"></a>

```typescript
public resetDynamicDateValue(): void
```

##### `resetPrecision` <a name="resetPrecision" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetPrecision"></a>

```typescript
public resetPrecision(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValueInput">dateValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValueInput">dynamicDateValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precisionInput">precisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValue">dateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValue">dynamicDateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precision">precision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateValueInput`<sup>Optional</sup> <a name="dateValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValueInput"></a>

```typescript
public readonly dateValueInput: string;
```

- *Type:* string

---

##### `dynamicDateValueInput`<sup>Optional</sup> <a name="dynamicDateValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValueInput"></a>

```typescript
public readonly dynamicDateValueInput: string;
```

- *Type:* string

---

##### `precisionInput`<sup>Optional</sup> <a name="precisionInput" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precisionInput"></a>

```typescript
public readonly precisionInput: string;
```

- *Type:* string

---

##### `dateValue`<sup>Required</sup> <a name="dateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValue"></a>

```typescript
public readonly dateValue: string;
```

- *Type:* string

---

##### `dynamicDateValue`<sup>Required</sup> <a name="dynamicDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValue"></a>

```typescript
public readonly dynamicDateValue: string;
```

- *Type:* string

---

##### `precision`<sup>Required</sup> <a name="precision" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precision"></a>

```typescript
public readonly precision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QueryParameterDateValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---


### QueryParameterEnumValueMultiValuesOptionsOutputReference <a name="QueryParameterEnumValueMultiValuesOptionsOutputReference" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

new query.QueryParameterEnumValueMultiValuesOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSeparator">resetSeparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetSeparator` <a name="resetSeparator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSeparator"></a>

```typescript
public resetSeparator(): void
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separatorInput">separatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separator">separator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `separatorInput`<sup>Optional</sup> <a name="separatorInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separatorInput"></a>

```typescript
public readonly separatorInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QueryParameterEnumValueMultiValuesOptions;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---


### QueryParameterEnumValueOutputReference <a name="QueryParameterEnumValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

new query.QueryParameterEnumValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions">putMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetEnumOptions">resetEnumOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetMultiValuesOptions">resetMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiValuesOptions` <a name="putMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions"></a>

```typescript
public putMultiValuesOptions(value: QueryParameterEnumValueMultiValuesOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---

##### `resetEnumOptions` <a name="resetEnumOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetEnumOptions"></a>

```typescript
public resetEnumOptions(): void
```

##### `resetMultiValuesOptions` <a name="resetMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetMultiValuesOptions"></a>

```typescript
public resetMultiValuesOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptions">multiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference">QueryParameterEnumValueMultiValuesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptionsInput">enumOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptionsInput">multiValuesOptionsInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptions">enumOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multiValuesOptions`<sup>Required</sup> <a name="multiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptions"></a>

```typescript
public readonly multiValuesOptions: QueryParameterEnumValueMultiValuesOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference">QueryParameterEnumValueMultiValuesOptionsOutputReference</a>

---

##### `enumOptionsInput`<sup>Optional</sup> <a name="enumOptionsInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptionsInput"></a>

```typescript
public readonly enumOptionsInput: string;
```

- *Type:* string

---

##### `multiValuesOptionsInput`<sup>Optional</sup> <a name="multiValuesOptionsInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptionsInput"></a>

```typescript
public readonly multiValuesOptionsInput: QueryParameterEnumValueMultiValuesOptions;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `enumOptions`<sup>Required</sup> <a name="enumOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptions"></a>

```typescript
public readonly enumOptions: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QueryParameterEnumValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---


### QueryParameterList <a name="QueryParameterList" id="@cdktf/provider-databricks.query.QueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

new query.QueryParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.query.QueryParameterList.get"></a>

```typescript
public get(index: number): QueryParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.query.QueryParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QueryParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>[]

---


### QueryParameterNumericValueOutputReference <a name="QueryParameterNumericValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

new query.QueryParameterNumericValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QueryParameterNumericValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---


### QueryParameterOutputReference <a name="QueryParameterOutputReference" id="@cdktf/provider-databricks.query.QueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

new query.QueryParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue">putDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue">putDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue">putEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue">putNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue">putQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue">putTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateRangeValue">resetDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateValue">resetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetEnumValue">resetEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetNumericValue">resetNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetQueryBackedValue">resetQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTextValue">resetTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateRangeValue` <a name="putDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue"></a>

```typescript
public putDateRangeValue(value: QueryParameterDateRangeValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---

##### `putDateValue` <a name="putDateValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue"></a>

```typescript
public putDateValue(value: QueryParameterDateValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---

##### `putEnumValue` <a name="putEnumValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue"></a>

```typescript
public putEnumValue(value: QueryParameterEnumValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---

##### `putNumericValue` <a name="putNumericValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue"></a>

```typescript
public putNumericValue(value: QueryParameterNumericValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---

##### `putQueryBackedValue` <a name="putQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue"></a>

```typescript
public putQueryBackedValue(value: QueryParameterQueryBackedValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---

##### `putTextValue` <a name="putTextValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue"></a>

```typescript
public putTextValue(value: QueryParameterTextValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---

##### `resetDateRangeValue` <a name="resetDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateRangeValue"></a>

```typescript
public resetDateRangeValue(): void
```

##### `resetDateValue` <a name="resetDateValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateValue"></a>

```typescript
public resetDateValue(): void
```

##### `resetEnumValue` <a name="resetEnumValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetEnumValue"></a>

```typescript
public resetEnumValue(): void
```

##### `resetNumericValue` <a name="resetNumericValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetNumericValue"></a>

```typescript
public resetNumericValue(): void
```

##### `resetQueryBackedValue` <a name="resetQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetQueryBackedValue"></a>

```typescript
public resetQueryBackedValue(): void
```

##### `resetTextValue` <a name="resetTextValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTextValue"></a>

```typescript
public resetTextValue(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValue">dateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference">QueryParameterDateRangeValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValue">dateValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference">QueryParameterDateValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValue">enumValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference">QueryParameterEnumValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValue">numericValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference">QueryParameterNumericValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValue">queryBackedValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference">QueryParameterQueryBackedValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValue">textValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference">QueryParameterTextValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValueInput">dateRangeValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValueInput">dateValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValueInput">enumValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValueInput">numericValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValueInput">queryBackedValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValueInput">textValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateRangeValue`<sup>Required</sup> <a name="dateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValue"></a>

```typescript
public readonly dateRangeValue: QueryParameterDateRangeValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference">QueryParameterDateRangeValueOutputReference</a>

---

##### `dateValue`<sup>Required</sup> <a name="dateValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValue"></a>

```typescript
public readonly dateValue: QueryParameterDateValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference">QueryParameterDateValueOutputReference</a>

---

##### `enumValue`<sup>Required</sup> <a name="enumValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValue"></a>

```typescript
public readonly enumValue: QueryParameterEnumValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference">QueryParameterEnumValueOutputReference</a>

---

##### `numericValue`<sup>Required</sup> <a name="numericValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValue"></a>

```typescript
public readonly numericValue: QueryParameterNumericValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference">QueryParameterNumericValueOutputReference</a>

---

##### `queryBackedValue`<sup>Required</sup> <a name="queryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValue"></a>

```typescript
public readonly queryBackedValue: QueryParameterQueryBackedValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference">QueryParameterQueryBackedValueOutputReference</a>

---

##### `textValue`<sup>Required</sup> <a name="textValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValue"></a>

```typescript
public readonly textValue: QueryParameterTextValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference">QueryParameterTextValueOutputReference</a>

---

##### `dateRangeValueInput`<sup>Optional</sup> <a name="dateRangeValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValueInput"></a>

```typescript
public readonly dateRangeValueInput: QueryParameterDateRangeValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---

##### `dateValueInput`<sup>Optional</sup> <a name="dateValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValueInput"></a>

```typescript
public readonly dateValueInput: QueryParameterDateValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---

##### `enumValueInput`<sup>Optional</sup> <a name="enumValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValueInput"></a>

```typescript
public readonly enumValueInput: QueryParameterEnumValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `numericValueInput`<sup>Optional</sup> <a name="numericValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValueInput"></a>

```typescript
public readonly numericValueInput: QueryParameterNumericValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---

##### `queryBackedValueInput`<sup>Optional</sup> <a name="queryBackedValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValueInput"></a>

```typescript
public readonly queryBackedValueInput: QueryParameterQueryBackedValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---

##### `textValueInput`<sup>Optional</sup> <a name="textValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValueInput"></a>

```typescript
public readonly textValueInput: QueryParameterTextValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QueryParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.query.QueryParameter">QueryParameter</a>

---


### QueryParameterQueryBackedValueMultiValuesOptionsOutputReference <a name="QueryParameterQueryBackedValueMultiValuesOptionsOutputReference" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

new query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSeparator">resetSeparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetSeparator` <a name="resetSeparator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSeparator"></a>

```typescript
public resetSeparator(): void
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separatorInput">separatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separator">separator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `separatorInput`<sup>Optional</sup> <a name="separatorInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separatorInput"></a>

```typescript
public readonly separatorInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QueryParameterQueryBackedValueMultiValuesOptions;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---


### QueryParameterQueryBackedValueOutputReference <a name="QueryParameterQueryBackedValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

new query.QueryParameterQueryBackedValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions">putMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetMultiValuesOptions">resetMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiValuesOptions` <a name="putMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions"></a>

```typescript
public putMultiValuesOptions(value: QueryParameterQueryBackedValueMultiValuesOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---

##### `resetMultiValuesOptions` <a name="resetMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetMultiValuesOptions"></a>

```typescript
public resetMultiValuesOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptions">multiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference">QueryParameterQueryBackedValueMultiValuesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptionsInput">multiValuesOptionsInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryIdInput">queryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryId">queryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multiValuesOptions`<sup>Required</sup> <a name="multiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptions"></a>

```typescript
public readonly multiValuesOptions: QueryParameterQueryBackedValueMultiValuesOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference">QueryParameterQueryBackedValueMultiValuesOptionsOutputReference</a>

---

##### `multiValuesOptionsInput`<sup>Optional</sup> <a name="multiValuesOptionsInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptionsInput"></a>

```typescript
public readonly multiValuesOptionsInput: QueryParameterQueryBackedValueMultiValuesOptions;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---

##### `queryIdInput`<sup>Optional</sup> <a name="queryIdInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryIdInput"></a>

```typescript
public readonly queryIdInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryId"></a>

```typescript
public readonly queryId: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QueryParameterQueryBackedValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---


### QueryParameterTextValueOutputReference <a name="QueryParameterTextValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer"></a>

```typescript
import { query } from '@cdktf/provider-databricks'

new query.QueryParameterTextValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QueryParameterTextValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---



