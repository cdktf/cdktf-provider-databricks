# `vectorSearchIndex` Submodule <a name="`vectorSearchIndex` Submodule" id="@cdktf/provider-databricks.vectorSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchIndex <a name="VectorSearchIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index databricks_vector_search_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndex(scope: Construct, id: string, config: VectorSearchIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig">VectorSearchIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig">VectorSearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDeltaSyncIndexSpec">putDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDirectAccessIndexSpec">putDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDeltaSyncIndexSpec">resetDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDirectAccessIndexSpec">resetDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeltaSyncIndexSpec` <a name="putDeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDeltaSyncIndexSpec"></a>

```typescript
public putDeltaSyncIndexSpec(value: VectorSearchIndexDeltaSyncIndexSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDeltaSyncIndexSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

---

##### `putDirectAccessIndexSpec` <a name="putDirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDirectAccessIndexSpec"></a>

```typescript
public putDirectAccessIndexSpec(value: VectorSearchIndexDirectAccessIndexSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDirectAccessIndexSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putTimeouts"></a>

```typescript
public putTimeouts(value: VectorSearchIndexTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

---

##### `resetDeltaSyncIndexSpec` <a name="resetDeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDeltaSyncIndexSpec"></a>

```typescript
public resetDeltaSyncIndexSpec(): void
```

##### `resetDirectAccessIndexSpec` <a name="resetDirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDirectAccessIndexSpec"></a>

```typescript
public resetDirectAccessIndexSpec(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VectorSearchIndex resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isConstruct"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

vectorSearchIndex.VectorSearchIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformElement"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

vectorSearchIndex.VectorSearchIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformResource"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

vectorSearchIndex.VectorSearchIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

vectorSearchIndex.VectorSearchIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VectorSearchIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VectorSearchIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VectorSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VectorSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpec">deltaSyncIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference">VectorSearchIndexDeltaSyncIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpec">directAccessIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference">VectorSearchIndexDirectAccessIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.status">status</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList">VectorSearchIndexStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference">VectorSearchIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpecInput">deltaSyncIndexSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpecInput">directAccessIndexSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexTypeInput">indexTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKeyInput">primaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexType">indexType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `deltaSyncIndexSpec`<sup>Required</sup> <a name="deltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpec"></a>

```typescript
public readonly deltaSyncIndexSpec: VectorSearchIndexDeltaSyncIndexSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference">VectorSearchIndexDeltaSyncIndexSpecOutputReference</a>

---

##### `directAccessIndexSpec`<sup>Required</sup> <a name="directAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpec"></a>

```typescript
public readonly directAccessIndexSpec: VectorSearchIndexDirectAccessIndexSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference">VectorSearchIndexDirectAccessIndexSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.status"></a>

```typescript
public readonly status: VectorSearchIndexStatusList;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList">VectorSearchIndexStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeouts"></a>

```typescript
public readonly timeouts: VectorSearchIndexTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference">VectorSearchIndexTimeoutsOutputReference</a>

---

##### `deltaSyncIndexSpecInput`<sup>Optional</sup> <a name="deltaSyncIndexSpecInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpecInput"></a>

```typescript
public readonly deltaSyncIndexSpecInput: VectorSearchIndexDeltaSyncIndexSpec;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

---

##### `directAccessIndexSpecInput`<sup>Optional</sup> <a name="directAccessIndexSpecInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpecInput"></a>

```typescript
public readonly directAccessIndexSpecInput: VectorSearchIndexDirectAccessIndexSpec;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexTypeInput`<sup>Optional</sup> <a name="indexTypeInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexTypeInput"></a>

```typescript
public readonly indexTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VectorSearchIndexTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexType`<sup>Required</sup> <a name="indexType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexType"></a>

```typescript
public readonly indexType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchIndexConfig <a name="VectorSearchIndexConfig" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

const vectorSearchIndexConfig: vectorSearchIndex.VectorSearchIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.endpointName">endpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#endpoint_name VectorSearchIndex#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.indexType">indexType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#index_type VectorSearchIndex#index_type}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.primaryKey">primaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#primary_key VectorSearchIndex#primary_key}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.deltaSyncIndexSpec">deltaSyncIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | delta_sync_index_spec block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.directAccessIndexSpec">directAccessIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | direct_access_index_spec block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#id VectorSearchIndex#id}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#endpoint_name VectorSearchIndex#endpoint_name}.

---

##### `indexType`<sup>Required</sup> <a name="indexType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.indexType"></a>

```typescript
public readonly indexType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#index_type VectorSearchIndex#index_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#primary_key VectorSearchIndex#primary_key}.

---

##### `deltaSyncIndexSpec`<sup>Optional</sup> <a name="deltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.deltaSyncIndexSpec"></a>

```typescript
public readonly deltaSyncIndexSpec: VectorSearchIndexDeltaSyncIndexSpec;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

delta_sync_index_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#delta_sync_index_spec VectorSearchIndex#delta_sync_index_spec}

---

##### `directAccessIndexSpec`<sup>Optional</sup> <a name="directAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.directAccessIndexSpec"></a>

```typescript
public readonly directAccessIndexSpec: VectorSearchIndexDirectAccessIndexSpec;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

direct_access_index_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#direct_access_index_spec VectorSearchIndex#direct_access_index_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#id VectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VectorSearchIndexTimeouts;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#timeouts VectorSearchIndex#timeouts}

---

### VectorSearchIndexDeltaSyncIndexSpec <a name="VectorSearchIndexDeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

const vectorSearchIndexDeltaSyncIndexSpec: vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | embedding_source_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | embedding_vector_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable">embeddingWritebackTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_writeback_table VectorSearchIndex#embedding_writeback_table}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.pipelineType">pipelineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#pipeline_type VectorSearchIndex#pipeline_type}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.sourceTable">sourceTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#source_table VectorSearchIndex#source_table}. |

---

##### `embeddingSourceColumns`<sup>Optional</sup> <a name="embeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: IResolvable | VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

embedding_source_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_source_columns VectorSearchIndex#embedding_source_columns}

---

##### `embeddingVectorColumns`<sup>Optional</sup> <a name="embeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: IResolvable | VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

embedding_vector_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_vector_columns VectorSearchIndex#embedding_vector_columns}

---

##### `embeddingWritebackTable`<sup>Optional</sup> <a name="embeddingWritebackTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable"></a>

```typescript
public readonly embeddingWritebackTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_writeback_table VectorSearchIndex#embedding_writeback_table}.

---

##### `pipelineType`<sup>Optional</sup> <a name="pipelineType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.pipelineType"></a>

```typescript
public readonly pipelineType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#pipeline_type VectorSearchIndex#pipeline_type}.

---

##### `sourceTable`<sup>Optional</sup> <a name="sourceTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.sourceTable"></a>

```typescript
public readonly sourceTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#source_table VectorSearchIndex#source_table}.

---

### VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

const vectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns: vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName">embeddingModelEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `embeddingModelEndpointName`<sup>Optional</sup> <a name="embeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName"></a>

```typescript
public readonly embeddingModelEndpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

const vectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns: vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `embeddingDimension`<sup>Optional</sup> <a name="embeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexDirectAccessIndexSpec <a name="VectorSearchIndexDirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

const vectorSearchIndexDirectAccessIndexSpec: vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | embedding_source_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | embedding_vector_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.schemaJson">schemaJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#schema_json VectorSearchIndex#schema_json}. |

---

##### `embeddingSourceColumns`<sup>Optional</sup> <a name="embeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: IResolvable | VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

embedding_source_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_source_columns VectorSearchIndex#embedding_source_columns}

---

##### `embeddingVectorColumns`<sup>Optional</sup> <a name="embeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: IResolvable | VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

embedding_vector_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_vector_columns VectorSearchIndex#embedding_vector_columns}

---

##### `schemaJson`<sup>Optional</sup> <a name="schemaJson" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.schemaJson"></a>

```typescript
public readonly schemaJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#schema_json VectorSearchIndex#schema_json}.

---

### VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

const vectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns: vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName">embeddingModelEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `embeddingModelEndpointName`<sup>Optional</sup> <a name="embeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName"></a>

```typescript
public readonly embeddingModelEndpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

const vectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns: vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `embeddingDimension`<sup>Optional</sup> <a name="embeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexStatus <a name="VectorSearchIndexStatus" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

const vectorSearchIndexStatus: vectorSearchIndex.VectorSearchIndexStatus = { ... }
```


### VectorSearchIndexTimeouts <a name="VectorSearchIndexTimeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

const vectorSearchIndexTimeouts: vectorSearchIndex.VectorSearchIndexTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#create VectorSearchIndex#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/vector_search_index#create VectorSearchIndex#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get"></a>

```typescript
public get(index: number): VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---


### VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName">resetEmbeddingModelEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingModelEndpointName` <a name="resetEmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName"></a>

```typescript
public resetEmbeddingModelEndpointName(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput">embeddingModelEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName">embeddingModelEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingModelEndpointNameInput`<sup>Optional</sup> <a name="embeddingModelEndpointNameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput"></a>

```typescript
public readonly embeddingModelEndpointNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingModelEndpointName`<sup>Required</sup> <a name="embeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName"></a>

```typescript
public readonly embeddingModelEndpointName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>

---


### VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get"></a>

```typescript
public get(index: number): VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---


### VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">resetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingDimension` <a name="resetEmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```typescript
public resetEmbeddingDimension(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">embeddingDimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingDimensionInput`<sup>Optional</sup> <a name="embeddingDimensionInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```typescript
public readonly embeddingDimensionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingDimension`<sup>Required</sup> <a name="embeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>

---


### VectorSearchIndexDeltaSyncIndexSpecOutputReference <a name="VectorSearchIndexDeltaSyncIndexSpecOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns">putEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns">putEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns">resetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns">resetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable">resetEmbeddingWritebackTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetPipelineType">resetPipelineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable">resetSourceTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmbeddingSourceColumns` <a name="putEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```typescript
public putEmbeddingSourceColumns(value: IResolvable | VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `putEmbeddingVectorColumns` <a name="putEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```typescript
public putEmbeddingVectorColumns(value: IResolvable | VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `resetEmbeddingSourceColumns` <a name="resetEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```typescript
public resetEmbeddingSourceColumns(): void
```

##### `resetEmbeddingVectorColumns` <a name="resetEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```typescript
public resetEmbeddingVectorColumns(): void
```

##### `resetEmbeddingWritebackTable` <a name="resetEmbeddingWritebackTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable"></a>

```typescript
public resetEmbeddingWritebackTable(): void
```

##### `resetPipelineType` <a name="resetPipelineType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetPipelineType"></a>

```typescript
public resetPipelineType(): void
```

##### `resetSourceTable` <a name="resetSourceTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable"></a>

```typescript
public resetSourceTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput">embeddingSourceColumnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput">embeddingVectorColumnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput">embeddingWritebackTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput">pipelineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput">sourceTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable">embeddingWritebackTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType">pipelineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable">sourceTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingSourceColumns`<sup>Required</sup> <a name="embeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a>

---

##### `embeddingVectorColumns`<sup>Required</sup> <a name="embeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `embeddingSourceColumnsInput`<sup>Optional</sup> <a name="embeddingSourceColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```typescript
public readonly embeddingSourceColumnsInput: IResolvable | VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `embeddingVectorColumnsInput`<sup>Optional</sup> <a name="embeddingVectorColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```typescript
public readonly embeddingVectorColumnsInput: IResolvable | VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `embeddingWritebackTableInput`<sup>Optional</sup> <a name="embeddingWritebackTableInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput"></a>

```typescript
public readonly embeddingWritebackTableInput: string;
```

- *Type:* string

---

##### `pipelineTypeInput`<sup>Optional</sup> <a name="pipelineTypeInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput"></a>

```typescript
public readonly pipelineTypeInput: string;
```

- *Type:* string

---

##### `sourceTableInput`<sup>Optional</sup> <a name="sourceTableInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput"></a>

```typescript
public readonly sourceTableInput: string;
```

- *Type:* string

---

##### `embeddingWritebackTable`<sup>Required</sup> <a name="embeddingWritebackTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable"></a>

```typescript
public readonly embeddingWritebackTable: string;
```

- *Type:* string

---

##### `pipelineType`<sup>Required</sup> <a name="pipelineType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType"></a>

```typescript
public readonly pipelineType: string;
```

- *Type:* string

---

##### `sourceTable`<sup>Required</sup> <a name="sourceTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable"></a>

```typescript
public readonly sourceTable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VectorSearchIndexDeltaSyncIndexSpec;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get"></a>

```typescript
public get(index: number): VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName">resetEmbeddingModelEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingModelEndpointName` <a name="resetEmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName"></a>

```typescript
public resetEmbeddingModelEndpointName(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput">embeddingModelEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName">embeddingModelEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingModelEndpointNameInput`<sup>Optional</sup> <a name="embeddingModelEndpointNameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput"></a>

```typescript
public readonly embeddingModelEndpointNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingModelEndpointName`<sup>Required</sup> <a name="embeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName"></a>

```typescript
public readonly embeddingModelEndpointName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get"></a>

```typescript
public get(index: number): VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">resetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingDimension` <a name="resetEmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```typescript
public resetEmbeddingDimension(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">embeddingDimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingDimensionInput`<sup>Optional</sup> <a name="embeddingDimensionInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```typescript
public readonly embeddingDimensionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingDimension`<sup>Required</sup> <a name="embeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>

---


### VectorSearchIndexDirectAccessIndexSpecOutputReference <a name="VectorSearchIndexDirectAccessIndexSpecOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns">putEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns">putEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns">resetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns">resetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson">resetSchemaJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmbeddingSourceColumns` <a name="putEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```typescript
public putEmbeddingSourceColumns(value: IResolvable | VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `putEmbeddingVectorColumns` <a name="putEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```typescript
public putEmbeddingVectorColumns(value: IResolvable | VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `resetEmbeddingSourceColumns` <a name="resetEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```typescript
public resetEmbeddingSourceColumns(): void
```

##### `resetEmbeddingVectorColumns` <a name="resetEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```typescript
public resetEmbeddingVectorColumns(): void
```

##### `resetSchemaJson` <a name="resetSchemaJson" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson"></a>

```typescript
public resetSchemaJson(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput">embeddingSourceColumnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput">embeddingVectorColumnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput">schemaJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson">schemaJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingSourceColumns`<sup>Required</sup> <a name="embeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a>

---

##### `embeddingVectorColumns`<sup>Required</sup> <a name="embeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a>

---

##### `embeddingSourceColumnsInput`<sup>Optional</sup> <a name="embeddingSourceColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```typescript
public readonly embeddingSourceColumnsInput: IResolvable | VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `embeddingVectorColumnsInput`<sup>Optional</sup> <a name="embeddingVectorColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```typescript
public readonly embeddingVectorColumnsInput: IResolvable | VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `schemaJsonInput`<sup>Optional</sup> <a name="schemaJsonInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput"></a>

```typescript
public readonly schemaJsonInput: string;
```

- *Type:* string

---

##### `schemaJson`<sup>Required</sup> <a name="schemaJson" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson"></a>

```typescript
public readonly schemaJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VectorSearchIndexDirectAccessIndexSpec;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

---


### VectorSearchIndexStatusList <a name="VectorSearchIndexStatusList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.get"></a>

```typescript
public get(index: number): VectorSearchIndexStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VectorSearchIndexStatusOutputReference <a name="VectorSearchIndexStatusOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexedRowCount">indexedRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexUrl">indexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.ready">ready</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus">VectorSearchIndexStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexedRowCount`<sup>Required</sup> <a name="indexedRowCount" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexedRowCount"></a>

```typescript
public readonly indexedRowCount: number;
```

- *Type:* number

---

##### `indexUrl`<sup>Required</sup> <a name="indexUrl" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexUrl"></a>

```typescript
public readonly indexUrl: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.ready"></a>

```typescript
public readonly ready: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VectorSearchIndexStatus;
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus">VectorSearchIndexStatus</a>

---


### VectorSearchIndexTimeoutsOutputReference <a name="VectorSearchIndexTimeoutsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer"></a>

```typescript
import { vectorSearchIndex } from '@cdktf/provider-databricks'

new vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchIndexTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

---



