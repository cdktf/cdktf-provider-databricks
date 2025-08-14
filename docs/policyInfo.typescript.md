# `policyInfo` Submodule <a name="`policyInfo` Submodule" id="@cdktf/provider-databricks.policyInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyInfo <a name="PolicyInfo" id="@cdktf/provider-databricks.policyInfo.PolicyInfo"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info databricks_policy_info}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

new policyInfo.PolicyInfo(scope: Construct, id: string, config: PolicyInfoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig">PolicyInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig">PolicyInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.putColumnMask">putColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.putMatchColumns">putMatchColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.putRowFilter">putRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.resetColumnMask">resetColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.resetExceptPrincipals">resetExceptPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.resetMatchColumns">resetMatchColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.resetOnSecurableFullname">resetOnSecurableFullname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.resetOnSecurableType">resetOnSecurableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.resetRowFilter">resetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.resetWhenCondition">resetWhenCondition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumnMask` <a name="putColumnMask" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.putColumnMask"></a>

```typescript
public putColumnMask(value: PolicyInfoColumnMask): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.putColumnMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a>

---

##### `putMatchColumns` <a name="putMatchColumns" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.putMatchColumns"></a>

```typescript
public putMatchColumns(value: IResolvable | PolicyInfoMatchColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.putMatchColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]

---

##### `putRowFilter` <a name="putRowFilter" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.putRowFilter"></a>

```typescript
public putRowFilter(value: PolicyInfoRowFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.putRowFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a>

---

##### `resetColumnMask` <a name="resetColumnMask" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.resetColumnMask"></a>

```typescript
public resetColumnMask(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetExceptPrincipals` <a name="resetExceptPrincipals" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.resetExceptPrincipals"></a>

```typescript
public resetExceptPrincipals(): void
```

##### `resetMatchColumns` <a name="resetMatchColumns" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.resetMatchColumns"></a>

```typescript
public resetMatchColumns(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOnSecurableFullname` <a name="resetOnSecurableFullname" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.resetOnSecurableFullname"></a>

```typescript
public resetOnSecurableFullname(): void
```

##### `resetOnSecurableType` <a name="resetOnSecurableType" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.resetOnSecurableType"></a>

```typescript
public resetOnSecurableType(): void
```

##### `resetRowFilter` <a name="resetRowFilter" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.resetRowFilter"></a>

```typescript
public resetRowFilter(): void
```

##### `resetWhenCondition` <a name="resetWhenCondition" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.resetWhenCondition"></a>

```typescript
public resetWhenCondition(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyInfo resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.isConstruct"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

policyInfo.PolicyInfo.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.isTerraformElement"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

policyInfo.PolicyInfo.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.isTerraformResource"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

policyInfo.PolicyInfo.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.generateConfigForImport"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

policyInfo.PolicyInfo.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicyInfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.columnMask">columnMask</a></code> | <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference">PolicyInfoColumnMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.matchColumns">matchColumns</a></code> | <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList">PolicyInfoMatchColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference">PolicyInfoRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.columnMaskInput">columnMaskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.exceptPrincipalsInput">exceptPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.forSecurableTypeInput">forSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.matchColumnsInput">matchColumnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.onSecurableFullnameInput">onSecurableFullnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.onSecurableTypeInput">onSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.rowFilterInput">rowFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.toPrincipalsInput">toPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.whenConditionInput">whenConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.exceptPrincipals">exceptPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.forSecurableType">forSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.toPrincipals">toPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.whenCondition">whenCondition</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `columnMask`<sup>Required</sup> <a name="columnMask" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.columnMask"></a>

```typescript
public readonly columnMask: PolicyInfoColumnMaskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference">PolicyInfoColumnMaskOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchColumns`<sup>Required</sup> <a name="matchColumns" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.matchColumns"></a>

```typescript
public readonly matchColumns: PolicyInfoMatchColumnsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList">PolicyInfoMatchColumnsList</a>

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.rowFilter"></a>

```typescript
public readonly rowFilter: PolicyInfoRowFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference">PolicyInfoRowFilterOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `columnMaskInput`<sup>Optional</sup> <a name="columnMaskInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.columnMaskInput"></a>

```typescript
public readonly columnMaskInput: IResolvable | PolicyInfoColumnMask;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `exceptPrincipalsInput`<sup>Optional</sup> <a name="exceptPrincipalsInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.exceptPrincipalsInput"></a>

```typescript
public readonly exceptPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `forSecurableTypeInput`<sup>Optional</sup> <a name="forSecurableTypeInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.forSecurableTypeInput"></a>

```typescript
public readonly forSecurableTypeInput: string;
```

- *Type:* string

---

##### `matchColumnsInput`<sup>Optional</sup> <a name="matchColumnsInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.matchColumnsInput"></a>

```typescript
public readonly matchColumnsInput: IResolvable | PolicyInfoMatchColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onSecurableFullnameInput`<sup>Optional</sup> <a name="onSecurableFullnameInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.onSecurableFullnameInput"></a>

```typescript
public readonly onSecurableFullnameInput: string;
```

- *Type:* string

---

##### `onSecurableTypeInput`<sup>Optional</sup> <a name="onSecurableTypeInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.onSecurableTypeInput"></a>

```typescript
public readonly onSecurableTypeInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `rowFilterInput`<sup>Optional</sup> <a name="rowFilterInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.rowFilterInput"></a>

```typescript
public readonly rowFilterInput: IResolvable | PolicyInfoRowFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a>

---

##### `toPrincipalsInput`<sup>Optional</sup> <a name="toPrincipalsInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.toPrincipalsInput"></a>

```typescript
public readonly toPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `whenConditionInput`<sup>Optional</sup> <a name="whenConditionInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.whenConditionInput"></a>

```typescript
public readonly whenConditionInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `exceptPrincipals`<sup>Required</sup> <a name="exceptPrincipals" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.exceptPrincipals"></a>

```typescript
public readonly exceptPrincipals: string[];
```

- *Type:* string[]

---

##### `forSecurableType`<sup>Required</sup> <a name="forSecurableType" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.forSecurableType"></a>

```typescript
public readonly forSecurableType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `toPrincipals`<sup>Required</sup> <a name="toPrincipals" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.toPrincipals"></a>

```typescript
public readonly toPrincipals: string[];
```

- *Type:* string[]

---

##### `whenCondition`<sup>Required</sup> <a name="whenCondition" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.whenCondition"></a>

```typescript
public readonly whenCondition: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.policyInfo.PolicyInfo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyInfoColumnMask <a name="PolicyInfoColumnMask" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

const policyInfoColumnMask: policyInfo.PolicyInfoColumnMask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#function_name PolicyInfo#function_name}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask.property.onColumn">onColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#on_column PolicyInfo#on_column}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask.property.using">using</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#using PolicyInfo#using}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#function_name PolicyInfo#function_name}.

---

##### `onColumn`<sup>Required</sup> <a name="onColumn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask.property.onColumn"></a>

```typescript
public readonly onColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#on_column PolicyInfo#on_column}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask.property.using"></a>

```typescript
public readonly using: IResolvable | PolicyInfoColumnMaskUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#using PolicyInfo#using}.

---

### PolicyInfoColumnMaskUsing <a name="PolicyInfoColumnMaskUsing" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

const policyInfoColumnMaskUsing: policyInfo.PolicyInfoColumnMaskUsing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#alias PolicyInfo#alias}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing.property.constant">constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#constant PolicyInfo#constant}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#alias PolicyInfo#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#constant PolicyInfo#constant}.

---

### PolicyInfoConfig <a name="PolicyInfoConfig" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

const policyInfoConfig: policyInfo.PolicyInfoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.forSecurableType">forSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#for_securable_type PolicyInfo#for_securable_type}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#policy_type PolicyInfo#policy_type}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.toPrincipals">toPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#to_principals PolicyInfo#to_principals}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.columnMask">columnMask</a></code> | <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#column_mask PolicyInfo#column_mask}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#comment PolicyInfo#comment}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.exceptPrincipals">exceptPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#except_principals PolicyInfo#except_principals}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.matchColumns">matchColumns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#match_columns PolicyInfo#match_columns}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#name PolicyInfo#name}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#on_securable_fullname PolicyInfo#on_securable_fullname}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#on_securable_type PolicyInfo#on_securable_type}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#row_filter PolicyInfo#row_filter}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.whenCondition">whenCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#when_condition PolicyInfo#when_condition}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `forSecurableType`<sup>Required</sup> <a name="forSecurableType" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.forSecurableType"></a>

```typescript
public readonly forSecurableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#for_securable_type PolicyInfo#for_securable_type}.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#policy_type PolicyInfo#policy_type}.

---

##### `toPrincipals`<sup>Required</sup> <a name="toPrincipals" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.toPrincipals"></a>

```typescript
public readonly toPrincipals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#to_principals PolicyInfo#to_principals}.

---

##### `columnMask`<sup>Optional</sup> <a name="columnMask" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.columnMask"></a>

```typescript
public readonly columnMask: PolicyInfoColumnMask;
```

- *Type:* <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#column_mask PolicyInfo#column_mask}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#comment PolicyInfo#comment}.

---

##### `exceptPrincipals`<sup>Optional</sup> <a name="exceptPrincipals" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.exceptPrincipals"></a>

```typescript
public readonly exceptPrincipals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#except_principals PolicyInfo#except_principals}.

---

##### `matchColumns`<sup>Optional</sup> <a name="matchColumns" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.matchColumns"></a>

```typescript
public readonly matchColumns: IResolvable | PolicyInfoMatchColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#match_columns PolicyInfo#match_columns}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#name PolicyInfo#name}.

---

##### `onSecurableFullname`<sup>Optional</sup> <a name="onSecurableFullname" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#on_securable_fullname PolicyInfo#on_securable_fullname}.

---

##### `onSecurableType`<sup>Optional</sup> <a name="onSecurableType" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#on_securable_type PolicyInfo#on_securable_type}.

---

##### `rowFilter`<sup>Optional</sup> <a name="rowFilter" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.rowFilter"></a>

```typescript
public readonly rowFilter: PolicyInfoRowFilter;
```

- *Type:* <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#row_filter PolicyInfo#row_filter}.

---

##### `whenCondition`<sup>Optional</sup> <a name="whenCondition" id="@cdktf/provider-databricks.policyInfo.PolicyInfoConfig.property.whenCondition"></a>

```typescript
public readonly whenCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#when_condition PolicyInfo#when_condition}.

---

### PolicyInfoMatchColumns <a name="PolicyInfoMatchColumns" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

const policyInfoMatchColumns: policyInfo.PolicyInfoMatchColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#alias PolicyInfo#alias}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#condition PolicyInfo#condition}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#alias PolicyInfo#alias}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#condition PolicyInfo#condition}.

---

### PolicyInfoRowFilter <a name="PolicyInfoRowFilter" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

const policyInfoRowFilter: policyInfo.PolicyInfoRowFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#function_name PolicyInfo#function_name}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter.property.using">using</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#using PolicyInfo#using}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#function_name PolicyInfo#function_name}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter.property.using"></a>

```typescript
public readonly using: IResolvable | PolicyInfoRowFilterUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#using PolicyInfo#using}.

---

### PolicyInfoRowFilterUsing <a name="PolicyInfoRowFilterUsing" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

const policyInfoRowFilterUsing: policyInfo.PolicyInfoRowFilterUsing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#alias PolicyInfo#alias}. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing.property.constant">constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#constant PolicyInfo#constant}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#alias PolicyInfo#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/policy_info#constant PolicyInfo#constant}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyInfoColumnMaskOutputReference <a name="PolicyInfoColumnMaskOutputReference" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

new policyInfo.PolicyInfoColumnMaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.putUsing"></a>

```typescript
public putUsing(value: IResolvable | PolicyInfoColumnMaskUsing[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.putUsing.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]

---

##### `resetUsing` <a name="resetUsing" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.resetUsing"></a>

```typescript
public resetUsing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.using">using</a></code> | <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList">PolicyInfoColumnMaskUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.onColumnInput">onColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.usingInput">usingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.onColumn">onColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.using"></a>

```typescript
public readonly using: PolicyInfoColumnMaskUsingList;
```

- *Type:* <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList">PolicyInfoColumnMaskUsingList</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `onColumnInput`<sup>Optional</sup> <a name="onColumnInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.onColumnInput"></a>

```typescript
public readonly onColumnInput: string;
```

- *Type:* string

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.usingInput"></a>

```typescript
public readonly usingInput: IResolvable | PolicyInfoColumnMaskUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `onColumn`<sup>Required</sup> <a name="onColumn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.onColumn"></a>

```typescript
public readonly onColumn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoColumnMask;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a>

---


### PolicyInfoColumnMaskUsingList <a name="PolicyInfoColumnMaskUsingList" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

new policyInfo.PolicyInfoColumnMaskUsingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.get"></a>

```typescript
public get(index: number): PolicyInfoColumnMaskUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoColumnMaskUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]

---


### PolicyInfoColumnMaskUsingOutputReference <a name="PolicyInfoColumnMaskUsingOutputReference" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

new policyInfo.PolicyInfoColumnMaskUsingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resetConstant">resetConstant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetConstant` <a name="resetConstant" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resetConstant"></a>

```typescript
public resetConstant(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.constantInput">constantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.constant">constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.constantInput"></a>

```typescript
public readonly constantInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoColumnMaskUsing;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>

---


### PolicyInfoMatchColumnsList <a name="PolicyInfoMatchColumnsList" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

new policyInfo.PolicyInfoMatchColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.get"></a>

```typescript
public get(index: number): PolicyInfoMatchColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoMatchColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]

---


### PolicyInfoMatchColumnsOutputReference <a name="PolicyInfoMatchColumnsOutputReference" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

new policyInfo.PolicyInfoMatchColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoMatchColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>

---


### PolicyInfoRowFilterOutputReference <a name="PolicyInfoRowFilterOutputReference" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

new policyInfo.PolicyInfoRowFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.putUsing"></a>

```typescript
public putUsing(value: IResolvable | PolicyInfoRowFilterUsing[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.putUsing.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]

---

##### `resetUsing` <a name="resetUsing" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.resetUsing"></a>

```typescript
public resetUsing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.using">using</a></code> | <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList">PolicyInfoRowFilterUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.usingInput">usingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.using"></a>

```typescript
public readonly using: PolicyInfoRowFilterUsingList;
```

- *Type:* <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList">PolicyInfoRowFilterUsingList</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.usingInput"></a>

```typescript
public readonly usingInput: IResolvable | PolicyInfoRowFilterUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoRowFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a>

---


### PolicyInfoRowFilterUsingList <a name="PolicyInfoRowFilterUsingList" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

new policyInfo.PolicyInfoRowFilterUsingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.get"></a>

```typescript
public get(index: number): PolicyInfoRowFilterUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoRowFilterUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]

---


### PolicyInfoRowFilterUsingOutputReference <a name="PolicyInfoRowFilterUsingOutputReference" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktf/provider-databricks'

new policyInfo.PolicyInfoRowFilterUsingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resetConstant">resetConstant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetConstant` <a name="resetConstant" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resetConstant"></a>

```typescript
public resetConstant(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.constantInput">constantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.constant">constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.constantInput"></a>

```typescript
public readonly constantInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoRowFilterUsing;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>

---



