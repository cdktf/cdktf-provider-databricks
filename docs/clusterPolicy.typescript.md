# `clusterPolicy` Submodule <a name="`clusterPolicy` Submodule" id="@cdktf/provider-databricks.clusterPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterPolicy <a name="ClusterPolicy" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy databricks_cluster_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

new clusterPolicy.ClusterPolicy(scope: Construct, id: string, config: ClusterPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig">ClusterPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig">ClusterPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.putLibraries">putLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetLibraries">resetLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetMaxClustersPerUser">resetMaxClustersPerUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyDefinitionOverrides">resetPolicyFamilyDefinitionOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyId">resetPolicyFamilyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLibraries` <a name="putLibraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.putLibraries"></a>

```typescript
public putLibraries(value: IResolvable | ClusterPolicyLibraries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.putLibraries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]

---

##### `resetDefinition` <a name="resetDefinition" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetDefinition"></a>

```typescript
public resetDefinition(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLibraries` <a name="resetLibraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetLibraries"></a>

```typescript
public resetLibraries(): void
```

##### `resetMaxClustersPerUser` <a name="resetMaxClustersPerUser" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetMaxClustersPerUser"></a>

```typescript
public resetMaxClustersPerUser(): void
```

##### `resetPolicyFamilyDefinitionOverrides` <a name="resetPolicyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyDefinitionOverrides"></a>

```typescript
public resetPolicyFamilyDefinitionOverrides(): void
```

##### `resetPolicyFamilyId` <a name="resetPolicyFamilyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyId"></a>

```typescript
public resetPolicyFamilyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ClusterPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isConstruct"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

clusterPolicy.ClusterPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformElement"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

clusterPolicy.ClusterPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformResource"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

clusterPolicy.ClusterPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

clusterPolicy.ClusterPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ClusterPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClusterPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClusterPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ClusterPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.libraries">libraries</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList">ClusterPolicyLibrariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.definitionInput">definitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.librariesInput">librariesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUserInput">maxClustersPerUserInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverridesInput">policyFamilyDefinitionOverridesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyIdInput">policyFamilyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUser">maxClustersPerUser</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverrides">policyFamilyDefinitionOverrides</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyId">policyFamilyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `libraries`<sup>Required</sup> <a name="libraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.libraries"></a>

```typescript
public readonly libraries: ClusterPolicyLibrariesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList">ClusterPolicyLibrariesList</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.definitionInput"></a>

```typescript
public readonly definitionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `librariesInput`<sup>Optional</sup> <a name="librariesInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.librariesInput"></a>

```typescript
public readonly librariesInput: IResolvable | ClusterPolicyLibraries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]

---

##### `maxClustersPerUserInput`<sup>Optional</sup> <a name="maxClustersPerUserInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUserInput"></a>

```typescript
public readonly maxClustersPerUserInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyFamilyDefinitionOverridesInput`<sup>Optional</sup> <a name="policyFamilyDefinitionOverridesInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverridesInput"></a>

```typescript
public readonly policyFamilyDefinitionOverridesInput: string;
```

- *Type:* string

---

##### `policyFamilyIdInput`<sup>Optional</sup> <a name="policyFamilyIdInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyIdInput"></a>

```typescript
public readonly policyFamilyIdInput: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxClustersPerUser`<sup>Required</sup> <a name="maxClustersPerUser" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUser"></a>

```typescript
public readonly maxClustersPerUser: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyFamilyDefinitionOverrides`<sup>Required</sup> <a name="policyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverrides"></a>

```typescript
public readonly policyFamilyDefinitionOverrides: string;
```

- *Type:* string

---

##### `policyFamilyId`<sup>Required</sup> <a name="policyFamilyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyId"></a>

```typescript
public readonly policyFamilyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterPolicyConfig <a name="ClusterPolicyConfig" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.Initializer"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

const clusterPolicyConfig: clusterPolicy.ClusterPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#name ClusterPolicy#name}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.definition">definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#definition ClusterPolicy#definition}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#description ClusterPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#id ClusterPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.libraries">libraries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]</code> | libraries block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.maxClustersPerUser">maxClustersPerUser</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#max_clusters_per_user ClusterPolicy#max_clusters_per_user}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyDefinitionOverrides">policyFamilyDefinitionOverrides</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#policy_family_definition_overrides ClusterPolicy#policy_family_definition_overrides}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyId">policyFamilyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#policy_family_id ClusterPolicy#policy_family_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#name ClusterPolicy#name}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#definition ClusterPolicy#definition}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#description ClusterPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#id ClusterPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `libraries`<sup>Optional</sup> <a name="libraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.libraries"></a>

```typescript
public readonly libraries: IResolvable | ClusterPolicyLibraries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#libraries ClusterPolicy#libraries}

---

##### `maxClustersPerUser`<sup>Optional</sup> <a name="maxClustersPerUser" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.maxClustersPerUser"></a>

```typescript
public readonly maxClustersPerUser: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#max_clusters_per_user ClusterPolicy#max_clusters_per_user}.

---

##### `policyFamilyDefinitionOverrides`<sup>Optional</sup> <a name="policyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyDefinitionOverrides"></a>

```typescript
public readonly policyFamilyDefinitionOverrides: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#policy_family_definition_overrides ClusterPolicy#policy_family_definition_overrides}.

---

##### `policyFamilyId`<sup>Optional</sup> <a name="policyFamilyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyId"></a>

```typescript
public readonly policyFamilyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#policy_family_id ClusterPolicy#policy_family_id}.

---

### ClusterPolicyLibraries <a name="ClusterPolicyLibraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.Initializer"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

const clusterPolicyLibraries: clusterPolicy.ClusterPolicyLibraries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.egg">egg</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#egg ClusterPolicy#egg}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.jar">jar</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#jar ClusterPolicy#jar}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.requirements">requirements</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#requirements ClusterPolicy#requirements}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.whl">whl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#whl ClusterPolicy#whl}. |

---

##### `cran`<sup>Optional</sup> <a name="cran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.cran"></a>

```typescript
public readonly cran: ClusterPolicyLibrariesCran;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#cran ClusterPolicy#cran}

---

##### `egg`<sup>Optional</sup> <a name="egg" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.egg"></a>

```typescript
public readonly egg: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#egg ClusterPolicy#egg}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.jar"></a>

```typescript
public readonly jar: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#jar ClusterPolicy#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.maven"></a>

```typescript
public readonly maven: ClusterPolicyLibrariesMaven;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#maven ClusterPolicy#maven}

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.pypi"></a>

```typescript
public readonly pypi: ClusterPolicyLibrariesPypi;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#pypi ClusterPolicy#pypi}

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.requirements"></a>

```typescript
public readonly requirements: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#requirements ClusterPolicy#requirements}.

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.whl"></a>

```typescript
public readonly whl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#whl ClusterPolicy#whl}.

---

### ClusterPolicyLibrariesCran <a name="ClusterPolicyLibrariesCran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.Initializer"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

const clusterPolicyLibrariesCran: clusterPolicy.ClusterPolicyLibrariesCran = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.package">package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#package ClusterPolicy#package}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.repo">repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#package ClusterPolicy#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}.

---

### ClusterPolicyLibrariesMaven <a name="ClusterPolicyLibrariesMaven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.Initializer"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

const clusterPolicyLibrariesMaven: clusterPolicy.ClusterPolicyLibrariesMaven = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.coordinates">coordinates</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#coordinates ClusterPolicy#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.exclusions">exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#exclusions ClusterPolicy#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.repo">repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}. |

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.coordinates"></a>

```typescript
public readonly coordinates: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#coordinates ClusterPolicy#coordinates}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#exclusions ClusterPolicy#exclusions}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}.

---

### ClusterPolicyLibrariesPypi <a name="ClusterPolicyLibrariesPypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.Initializer"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

const clusterPolicyLibrariesPypi: clusterPolicy.ClusterPolicyLibrariesPypi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.package">package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#package ClusterPolicy#package}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.repo">repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#package ClusterPolicy#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterPolicyLibrariesCranOutputReference <a name="ClusterPolicyLibrariesCranOutputReference" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

new clusterPolicy.ClusterPolicyLibrariesCranOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resetRepo"></a>

```typescript
public resetRepo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.packageInput">packageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repoInput">repoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.package">package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repo">repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.packageInput"></a>

```typescript
public readonly packageInput: string;
```

- *Type:* string

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repoInput"></a>

```typescript
public readonly repoInput: string;
```

- *Type:* string

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterPolicyLibrariesCran;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

---


### ClusterPolicyLibrariesList <a name="ClusterPolicyLibrariesList" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

new clusterPolicy.ClusterPolicyLibrariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.get"></a>

```typescript
public get(index: number): ClusterPolicyLibrariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterPolicyLibraries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]

---


### ClusterPolicyLibrariesMavenOutputReference <a name="ClusterPolicyLibrariesMavenOutputReference" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

new clusterPolicy.ClusterPolicyLibrariesMavenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetExclusions"></a>

```typescript
public resetExclusions(): void
```

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetRepo"></a>

```typescript
public resetRepo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinatesInput">coordinatesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repoInput">repoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinates">coordinates</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusions">exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repo">repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coordinatesInput`<sup>Optional</sup> <a name="coordinatesInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinatesInput"></a>

```typescript
public readonly coordinatesInput: string;
```

- *Type:* string

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusionsInput"></a>

```typescript
public readonly exclusionsInput: string[];
```

- *Type:* string[]

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repoInput"></a>

```typescript
public readonly repoInput: string;
```

- *Type:* string

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinates"></a>

```typescript
public readonly coordinates: string;
```

- *Type:* string

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterPolicyLibrariesMaven;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

---


### ClusterPolicyLibrariesOutputReference <a name="ClusterPolicyLibrariesOutputReference" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

new clusterPolicy.ClusterPolicyLibrariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putCran">putCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putMaven">putMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putPypi">putPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetCran">resetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetEgg">resetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetJar">resetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetMaven">resetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetPypi">resetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetRequirements">resetRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetWhl">resetWhl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCran` <a name="putCran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putCran"></a>

```typescript
public putCran(value: ClusterPolicyLibrariesCran): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putCran.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

---

##### `putMaven` <a name="putMaven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putMaven"></a>

```typescript
public putMaven(value: ClusterPolicyLibrariesMaven): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

---

##### `putPypi` <a name="putPypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putPypi"></a>

```typescript
public putPypi(value: ClusterPolicyLibrariesPypi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putPypi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

---

##### `resetCran` <a name="resetCran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetCran"></a>

```typescript
public resetCran(): void
```

##### `resetEgg` <a name="resetEgg" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetEgg"></a>

```typescript
public resetEgg(): void
```

##### `resetJar` <a name="resetJar" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetJar"></a>

```typescript
public resetJar(): void
```

##### `resetMaven` <a name="resetMaven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetMaven"></a>

```typescript
public resetMaven(): void
```

##### `resetPypi` <a name="resetPypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetPypi"></a>

```typescript
public resetPypi(): void
```

##### `resetRequirements` <a name="resetRequirements" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetRequirements"></a>

```typescript
public resetRequirements(): void
```

##### `resetWhl` <a name="resetWhl" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetWhl"></a>

```typescript
public resetWhl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference">ClusterPolicyLibrariesCranOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference">ClusterPolicyLibrariesMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference">ClusterPolicyLibrariesPypiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cranInput">cranInput</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.eggInput">eggInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jarInput">jarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.mavenInput">mavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypiInput">pypiInput</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirementsInput">requirementsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whlInput">whlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.egg">egg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jar">jar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirements">requirements</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whl">whl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cran`<sup>Required</sup> <a name="cran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cran"></a>

```typescript
public readonly cran: ClusterPolicyLibrariesCranOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference">ClusterPolicyLibrariesCranOutputReference</a>

---

##### `maven`<sup>Required</sup> <a name="maven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.maven"></a>

```typescript
public readonly maven: ClusterPolicyLibrariesMavenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference">ClusterPolicyLibrariesMavenOutputReference</a>

---

##### `pypi`<sup>Required</sup> <a name="pypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypi"></a>

```typescript
public readonly pypi: ClusterPolicyLibrariesPypiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference">ClusterPolicyLibrariesPypiOutputReference</a>

---

##### `cranInput`<sup>Optional</sup> <a name="cranInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cranInput"></a>

```typescript
public readonly cranInput: ClusterPolicyLibrariesCran;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

---

##### `eggInput`<sup>Optional</sup> <a name="eggInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.eggInput"></a>

```typescript
public readonly eggInput: string;
```

- *Type:* string

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jarInput"></a>

```typescript
public readonly jarInput: string;
```

- *Type:* string

---

##### `mavenInput`<sup>Optional</sup> <a name="mavenInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.mavenInput"></a>

```typescript
public readonly mavenInput: ClusterPolicyLibrariesMaven;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

---

##### `pypiInput`<sup>Optional</sup> <a name="pypiInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypiInput"></a>

```typescript
public readonly pypiInput: ClusterPolicyLibrariesPypi;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

---

##### `requirementsInput`<sup>Optional</sup> <a name="requirementsInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirementsInput"></a>

```typescript
public readonly requirementsInput: string;
```

- *Type:* string

---

##### `whlInput`<sup>Optional</sup> <a name="whlInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whlInput"></a>

```typescript
public readonly whlInput: string;
```

- *Type:* string

---

##### `egg`<sup>Required</sup> <a name="egg" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.egg"></a>

```typescript
public readonly egg: string;
```

- *Type:* string

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jar"></a>

```typescript
public readonly jar: string;
```

- *Type:* string

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirements"></a>

```typescript
public readonly requirements: string;
```

- *Type:* string

---

##### `whl`<sup>Required</sup> <a name="whl" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whl"></a>

```typescript
public readonly whl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterPolicyLibraries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>

---


### ClusterPolicyLibrariesPypiOutputReference <a name="ClusterPolicyLibrariesPypiOutputReference" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer"></a>

```typescript
import { clusterPolicy } from '@cdktf/provider-databricks'

new clusterPolicy.ClusterPolicyLibrariesPypiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resetRepo"></a>

```typescript
public resetRepo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.packageInput">packageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repoInput">repoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.package">package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repo">repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.packageInput"></a>

```typescript
public readonly packageInput: string;
```

- *Type:* string

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repoInput"></a>

```typescript
public readonly repoInput: string;
```

- *Type:* string

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterPolicyLibrariesPypi;
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

---



