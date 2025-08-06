# `accessControlRuleSet` Submodule <a name="`accessControlRuleSet` Submodule" id="@cdktf/provider-databricks.accessControlRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessControlRuleSet <a name="AccessControlRuleSet" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/access_control_rule_set databricks_access_control_rule_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.Initializer"></a>

```typescript
import { accessControlRuleSet } from '@cdktf/provider-databricks'

new accessControlRuleSet.AccessControlRuleSet(scope: Construct, id: string, config: AccessControlRuleSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig">AccessControlRuleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig">AccessControlRuleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.putGrantRules">putGrantRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.resetGrantRules">resetGrantRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGrantRules` <a name="putGrantRules" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.putGrantRules"></a>

```typescript
public putGrantRules(value: IResolvable | AccessControlRuleSetGrantRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.putGrantRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules">AccessControlRuleSetGrantRules</a>[]

---

##### `resetGrantRules` <a name="resetGrantRules" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.resetGrantRules"></a>

```typescript
public resetGrantRules(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessControlRuleSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.isConstruct"></a>

```typescript
import { accessControlRuleSet } from '@cdktf/provider-databricks'

accessControlRuleSet.AccessControlRuleSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.isTerraformElement"></a>

```typescript
import { accessControlRuleSet } from '@cdktf/provider-databricks'

accessControlRuleSet.AccessControlRuleSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.isTerraformResource"></a>

```typescript
import { accessControlRuleSet } from '@cdktf/provider-databricks'

accessControlRuleSet.AccessControlRuleSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.generateConfigForImport"></a>

```typescript
import { accessControlRuleSet } from '@cdktf/provider-databricks'

accessControlRuleSet.AccessControlRuleSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccessControlRuleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessControlRuleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessControlRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/access_control_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessControlRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.grantRules">grantRules</a></code> | <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList">AccessControlRuleSetGrantRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.grantRulesInput">grantRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules">AccessControlRuleSetGrantRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `grantRules`<sup>Required</sup> <a name="grantRules" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.grantRules"></a>

```typescript
public readonly grantRules: AccessControlRuleSetGrantRulesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList">AccessControlRuleSetGrantRulesList</a>

---

##### `grantRulesInput`<sup>Optional</sup> <a name="grantRulesInput" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.grantRulesInput"></a>

```typescript
public readonly grantRulesInput: IResolvable | AccessControlRuleSetGrantRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules">AccessControlRuleSetGrantRules</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessControlRuleSetConfig <a name="AccessControlRuleSetConfig" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.Initializer"></a>

```typescript
import { accessControlRuleSet } from '@cdktf/provider-databricks'

const accessControlRuleSetConfig: accessControlRuleSet.AccessControlRuleSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/access_control_rule_set#name AccessControlRuleSet#name}. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.grantRules">grantRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules">AccessControlRuleSetGrantRules</a>[]</code> | grant_rules block. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/access_control_rule_set#id AccessControlRuleSet#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/access_control_rule_set#name AccessControlRuleSet#name}.

---

##### `grantRules`<sup>Optional</sup> <a name="grantRules" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.grantRules"></a>

```typescript
public readonly grantRules: IResolvable | AccessControlRuleSetGrantRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules">AccessControlRuleSetGrantRules</a>[]

grant_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/access_control_rule_set#grant_rules AccessControlRuleSet#grant_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/access_control_rule_set#id AccessControlRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AccessControlRuleSetGrantRules <a name="AccessControlRuleSetGrantRules" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules.Initializer"></a>

```typescript
import { accessControlRuleSet } from '@cdktf/provider-databricks'

const accessControlRuleSetGrantRules: accessControlRuleSet.AccessControlRuleSetGrantRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/access_control_rule_set#role AccessControlRuleSet#role}. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules.property.principals">principals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/access_control_rule_set#principals AccessControlRuleSet#principals}. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/access_control_rule_set#role AccessControlRuleSet#role}.

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/access_control_rule_set#principals AccessControlRuleSet#principals}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessControlRuleSetGrantRulesList <a name="AccessControlRuleSetGrantRulesList" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.Initializer"></a>

```typescript
import { accessControlRuleSet } from '@cdktf/provider-databricks'

new accessControlRuleSet.AccessControlRuleSetGrantRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.get"></a>

```typescript
public get(index: number): AccessControlRuleSetGrantRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules">AccessControlRuleSetGrantRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessControlRuleSetGrantRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules">AccessControlRuleSetGrantRules</a>[]

---


### AccessControlRuleSetGrantRulesOutputReference <a name="AccessControlRuleSetGrantRulesOutputReference" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.Initializer"></a>

```typescript
import { accessControlRuleSet } from '@cdktf/provider-databricks'

new accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.resetPrincipals">resetPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipals` <a name="resetPrincipals" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.resetPrincipals"></a>

```typescript
public resetPrincipals(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.principalsInput">principalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules">AccessControlRuleSetGrantRules</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.principalsInput"></a>

```typescript
public readonly principalsInput: string[];
```

- *Type:* string[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessControlRuleSetGrantRules | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-databricks.accessControlRuleSet.AccessControlRuleSetGrantRules">AccessControlRuleSetGrantRules</a> | cdktf.IResolvable

---



